import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const TravelChecklist = () => {
  const initialChecklist = {
    "Travel Essentials": [
      { name: "Passport", checked: false },
      { name: "Tickets", checked: false },
      { name: "Itinerary", checked: false },
      { name: "ID Card", checked: false },
      { name: "Travel Insurance", checked: false }
    ],
    "Clothing": [
      { name: "Casual Wear", checked: false },
      { name: "Formal Attire", checked: false },
      { name: "Swimsuit", checked: false },
      { name: "Jacket/Coat", checked: false },
      { name: "Footwear", checked: false }
    ],
    "Toiletries": [
      { name: "Toothbrush", checked: false },
      { name: "Toothpaste", checked: false },
      { name: "Shampoo", checked: false },
      { name: "Soap", checked: false },
      { name: "Sunscreen", checked: false },
      { name: "First Aid Kit", checked: false }
    ],
    "Electronics": [
      { name: "Phone Charger", checked: false },
      { name: "Power Bank", checked: false },
      { name: "Camera", checked: false },
      { name: "Laptop/Tablet", checked: false }
    ],
    "Destination-Specific": [
      { name: "Winter Gear", checked: false },
      { name: "Beach Essentials", checked: false },
      { name: "Hiking Boots", checked: false },
      { name: "Umbrella", checked: false }
    ]
  };

  const [checklist, setChecklist] = useState(initialChecklist);
  const [isVisible, setIsVisible] = useState(false);
  const toggleItem = (category, itemName) => {
    setChecklist(prev => ({
      ...prev,
      [category]: prev[category].map(item =>
        item.name === itemName ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const resetChecklist = () => setChecklist(initialChecklist);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Travel Checklist', 14, 22);
    let y = 30;

    Object.entries(checklist).forEach(([category, items]) => {
      doc.setFontSize(16);
      doc.text(category, 14, y);
      y += 10;
      
      items.forEach(item => {
        const checkmark = item.checked ? '✓' : ' ';
        doc.setFontSize(12);
        doc.text(`${checkmark} ${item.name}`, 14, y);
        y += 8;
      });

      y += 5; // Add space between categories
    });

    doc.save('travel_checklist.pdf');
  };

  const printChecklist = () => {
    const printContent = document.getElementById('checklist-container');
    
    if (printContent) {
      const newWin = window.open('', '_blank');
      newWin.document.write(`
        <html>
          <head>
            <title>Print Checklist</title>
            <style>
              body { font-family: Arial, sans-serif; }
              h2 { color: #4A5568; }
              ul { list-style-type: none; padding: 0; }
              li { margin: 5px 0; }
            </style>
          </head>
          <body>
            <h1 style="text-align: center;">Travel Checklist</h1>
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      newWin.document.close();
      newWin.onload = function() {
        newWin.print();
        newWin.close();
      };
    } else {
      console.error("Checklist container not found.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-teal-900 mb-10">Travel Checklist</h1>
        
        {/* Intro */}
        <div className="text-center text-gray-700 mb-8">
          <p className="mb-4">
            Planning a trip? Use this travel checklist to ensure you have all your essentials packed and ready! Customize your list as per your destination and needs.
          </p>
          <button 
            onClick={resetChecklist} 
            className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition">
            Reset Checklist
          </button>
        </div>

        {/* Checklist Container */}
        <div id='checklist-container' className={`checklist-container ${isVisible ? 'visible' : ''} space-y-8`}>
          {Object.entries(checklist).map(([category, items]) => (
            <div key={category} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => toggleItem(category, item.name)}
                      className="w-5 h-5 text-teal-600 bg-gray-100 rounded focus:ring-0" 
                    />
                    <span className="text-gray-700 text-lg">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download/Print Options */}
        <div className="text-center mt-10">
          <button 
          onClick={downloadPDF}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md mr-4 hover:bg-blue-600 transition">
            Download PDF
          </button>
          <button 
          onClick={printChecklist}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition">
            Print Checklist
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelChecklist;
