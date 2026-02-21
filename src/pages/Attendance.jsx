import React, { useState, useEffect, useCallback } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSheet, setSelectedSheet] = useState('TEACHER_ATTENDANCE'); // ডিফল্ট ট্যাব
  
  // আপনার ৫টা ট্যাবের নাম
  const availableSheets = ['STUDENT_ATTENDANCE', 'TEACHER_ATTENDANCE', 'STUDENTS', 'TEACHERS', 'CONFIG'];

  // আপনার Google Sheet ID
  const SHEET_ID = '1ignhS3FR1-qFSlMdltP4rxk0bmLw6YiJpzLplGdBw9Q';

  // CSV পার্স করার ফাংশন
  const parseCSV = (csvText) => {
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.replace(/"/g, '').trim());
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      return row;
    }).filter(row => Object.values(row).some(val => val !== ''));
  };

  // ডেটা ফেচ করার ফাংশন
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${selectedSheet}`;
      const response = await fetch(url);
      const csvText = await response.text();
      const parsedData = parseCSV(csvText);
      setData(parsedData);
    } catch (err) {
      setError('ডেটা লোড করতে সমস্যা হয়েছে');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [SHEET_ID, selectedSheet]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSheetChange = (e) => {
    setSelectedSheet(e.target.value);
  };

  if (loading && data.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="attendance-container">
      <h1>📋 অ্যাটেনডেন্স রেকর্ড</h1>
      
      {/* ড্রপডাউন */}
      <div className="sheet-selector">
        <label htmlFor="sheet-select">ট্যাব নির্বাচন করুন: </label>
        <select 
          id="sheet-select" 
          value={selectedSheet} 
          onChange={handleSheetChange}
          className="sheet-dropdown"
        >
          {availableSheets.map((sheet) => (
            <option key={sheet} value={sheet}>
              {sheet}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      {!loading && data.length === 0 && !error && (
        <p className="no-data">এই ট্যাবে কোনো ডেটা পাওয়া যায়নি</p>
      )}
      
      {!loading && data.length > 0 && (
        <div className="table-responsive">
          <table className="attendance-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((value, idx2) => (
                    <td key={idx2}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="record-count">
            মোট {data.length}টি রেকর্ড পাওয়া গেছে (ট্যাব: {selectedSheet})
          </p>
        </div>
      )}
    </div>
  );
};

export default Attendance;