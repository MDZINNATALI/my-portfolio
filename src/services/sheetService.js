// src/services/sheetService.js

// CSV ডেটা পার্স করার ফাংশন
const parseCSV = (csvText) => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
  
  return lines.slice(1).map(line => {
    if (!line.trim()) return null;
    
    const values = line.split(',').map(v => v.replace(/"/g, '').trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });
    return row;
  }).filter(row => row !== null);
};

// Google Sheet থেকে ডেটা ফেচ করার ফাংশন
export const fetchAttendanceData = async (sheetId, sheetName = 'Sheet1') => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    const response = await fetch(url);
    const csvText = await response.text();
    
    // CSV পার্স করে JSON-এ রূপান্তর
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
};