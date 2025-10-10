// src/reports/ElectricityBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import JsBarcode from "jsbarcode";

export const generateElectricityPDF = (billingData, projects) => {

  // if (!billingData.billingType || !billingData.btNo || !billingData.sector) {
  //   alert('Please fill all required fields!');
  //   return;
  // }

   // 🔹 Step 1: Extract both objects from API response
  const { electricityBill, customerDetail } = billingData[0];

  const doc = new jsPDF("p", "mm", "a4");

  // Generate Barcode
  const canvas = document.createElement("canvas");
  JsBarcode(canvas, "BTL-10014September2025", {
    format: "CODE39",
    displayValue: true,
    fontSize: 14,
  });
  const imgData = canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 70, 272, 70, 14);


  // Images
  //doc.addImage("imageName", "type", x, y, width, height);
  doc.addImage("logo.png", "PNG", 15, 24, 18, 18);
  doc.addImage("urdumessage1.jpeg", "JPEG", 14, 100, 116, 30);
  doc.addImage("urdumessage2.png", "PNG", 99, 203, 96, 25);
  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text("Note:", 21, 205);
  doc.addImage("urdumessage3.png", "PNG", 21, 205, 70, 14);




  // 🔹 Watermark: DUPLICATE BILL
  doc.saveGraphicsState(); // <-- save current graphics state
  doc.setGState(new doc.GState({ opacity: 1 })); // Only affects this block
  doc.setFont("helvetica", "normal");
  doc.setFontSize(40);
  doc.setTextColor(200, 200, 200); // Light gray
  doc.text("DUPLICATE BILL", 60, 100, { angle: 20 });
  doc.text("DUPLICATE BILL", 32, 210, { angle: 20 });
  doc.restoreGraphicsState(); // <-- restore so rest of PDF is normal



  

  //Header
  autoTable(doc, {
    head: [],
    body: [
      [
        { content: "", rowSpan: 3, styles: { valign: "bottom" } },
        {
          content: "BAHRIA TOWN PVT LTD - ELECTRICITY BILL",
          colSpan: 2,
          styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 }, fontStyle: "bold", font: "helvetica", fontSize: 15, minCellHeight: 7, cellPadding: { top: 2} },
        },
      ],
      [
        {
          content: "                YOUR LIFE STYLE DESTINATION",
          styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 }, fontSize: 8, minCellHeight: 4, cellPadding: {bottom: 0.5 }, halign: "left"},
        },
        {
          content: "GST NO. 07-02-8400-061-28               ",
          styles: { lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0 }, fontSize: 8, minCellHeight: 4, cellPadding: { bottom: 0.5 }, halign: "right" },
        },
      ],
      [
        {
          content: "",
          colSpan: 2,
          styles: { minCellHeight: 27},
        }
      ]
    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 20 }
    },
  });

  // Header Table
  autoTable(doc, {
    startY: 26.2,
    margin: { left: 34.4 },
    tableWidth: 161.2,
    body: [
      [{content:"  TAHIRA MALIK",colSpan:2}, {content:"CNIC No.",colSpan:2}, {content:"NTN No.",colSpan:2}],
      [{content:"  House No: 24",colSpan:2}, {content:"Block: SAFARI VILLAS",colSpan:2}, {content:"Sector: B",colSpan:2}],
      [{content:" Invoice No: 20250900010",colSpan:3}, {content:"Valid Date: 27-Oct-2025",colSpan:3}],
      ["Reference No", "MF@", "Billing Month", "Reading Date", "Issue Date", "Due Date"],
      ["100000000010", "1", "September 2025", {content:"20-Sep-2025",styles:{fontStyle:"normal"}}, "25-Sep-2025", "08-Oct-2025"]
    ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle"
    },
    columnStyles: {
      1: { cellWidth: 25 }
    },
    didParseCell: function (data) {
      if (data.section === "body") {
        if (data.row.index === 0) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.7;
          data.cell.styles.halign = "left";
           data.cell.styles.fontSize = 9;
        }
        if (data.row.index === 1) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.7;
           data.cell.styles.halign = "left";
            data.cell.styles.fontSize = 9;
        }
        if (data.row.index === 2) {
          data.cell.styles.minCellHeight = 6;
          data.cell.styles.halign = "left";
          data.cell.styles.fontSize = 10;
          data.cell.styles.fillColor = [235,235,235];
        }
        if (data.row.index === 3) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0;
          data.cell.styles.fontSize = 9;
          data.cell.styles.valign = "middle";
          data.cell.styles.fontStyle = "bold";
          data.cell.styles.fillColor = [190,190,190];
        }
        if (data.row.index === 4) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.8;
          data.cell.styles.fontSize = 9;
          data.cell.styles.valign = "middle";
          data.cell.styles.fontStyle = "bold";

          // 🔑 Example: row 4, column 3 wale cell ko normal rakho
          if (data.column.index === 3 || data.column.index === 4) {
            data.cell.styles.fontStyle = "normal"; // ye sirf is cell pe apply hoga
          } else {
            data.cell.styles.fontStyle = "bold";   // baaki sab bold
          }
        }
      }
    },
  });

  
  //Body-1
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: 'Bar Code No', styles: {} },
        { content: 'Tariff', styles: {} },
        { content: 'Conn Date', styles: {} },
        { content: 'Bank Account No (BTL Branch)', colSpan: 2, styles: {} },
        { content: '  Electricity', styles: { halign: "left" } }
      ],
      [
        { content: 'BTL-10014', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0.1 } } },
        { content: 'Residential', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 } } },
        { content: '19-Feb-2010', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 } } },
        { content: '', colSpan: 2, rowSpan: 3, styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0.1, left: 0 }, cellPadding: 0, fontSize: 10 } },
        { content: '', rowSpan: 9, styles: {} },
      ],
      [
        { content: 'GRID', styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0.1 } } },
        { content: 'Meter Type', styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0 } } },
        { content: 'Category', styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0 } } }
      ],
      [
        { content: 'BTL FEEDER - 1', styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 } } },
        { content: '3-Phase', styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0 } } },
        { content: 'Residential', styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0 } } }
      ],
      [
        { content: 'METER No', styles: {} },
        { content: 'PREVIOUS', styles: {} },
        { content: 'PRESENT', styles: {} },
        { content: 'UNITS', styles: {} },
        { content: 'MDI Reading', styles: {} }
      ],
      [
        { content: '66622020307', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0.1 } } },
        { content: '13566', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } },
        { content: '14375', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } },
        { content: '809', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } },
        { content: '', styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0.1, left: 0 } } }
      ],
      [
        { content: 'Units', styles: {} },
        { content: 'Rate', styles: {} },
        { content: 'Amount', styles: {} },
        { content: 'Deferred Amount', colSpan: 2, styles: {} }
      ],
      [
        { content: '809', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0.1 } } },
        { content: '51.5', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 } } },
        { content: '41664', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 } } },
        { content: '0', colSpan: 2, styles: { lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 } } }
      ],
      [
        { content: '', colSpan: 5, styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0.1 }} }
      ],
      [
        { content: 'Complaint Office (Mohlanwal) 042-35341646\nComplaint Office (Orchard)     042-35470996   042-35470997\nComplaint Office (Nasheman) 042-35935515', colSpan: 5, styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 }, cellPadding: 0.5, fontSize: 8, fontStyle: "bold", halign: "left" } }
      ]
    ],
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: 'center',
      valign: 'middle'
    },
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: 20 },
      2: { cellWidth: 20 },
      5: { cellWidth: 65 }
    },
    // didParseCell: function (data) {
    //   if (data.section === "body") {
    //     if (data.row.index === 0 || data.row.index === 4 || data.row.index === 6) {
    //       data.cell.styles.minCellHeight = 3;
    //       data.cell.styles.fontSize = 8;
    //       data.cell.styles.cellPadding = 0;
    //       data.cell.styles.valign = "middle";
    //       data.cell.styles.fillColor = "black";
    //       data.cell.styles.textColor = "white";
    //     }
    //     if ((data.row.index === 1 && data.column.index >= 0 && data.column.index <= 2) || data.row.index === 5 || data.row.index === 7) {
    //       data.cell.styles.minCellHeight = 8;
    //       data.cell.styles.fontSize = 8;
    //       data.cell.styles.cellPadding = { top: 1 };
    //       data.cell.styles.valign = "top";
    //     }
    //     if (data.row.index === 2) {
    //       data.cell.styles.minCellHeight = 3;
    //       data.cell.styles.fontSize = 8;
    //       data.cell.styles.cellPadding = 0;
    //       data.cell.styles.valign = "middle";
    //       data.cell.styles.fontStyle = "bold";
    //     }
    //     if (data.row.index === 3) {
    //       data.cell.styles.minCellHeight = 15;
    //       data.cell.styles.fontSize = 8;
    //       data.cell.styles.cellPadding = 0;
    //       data.cell.styles.valign = "top";
    //     }
    //     if (data.row.index === 8) {
    //       data.cell.styles.minCellHeight = 30;
    //     }
    //   }
    // }
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row, column, cell } = data;
      const r = row.index;
      const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      // Header-style rows (black background)
      if (r === 0 || r === 4 || r === 6) {
        setCell({
          minCellHeight: 3,
          fontSize: 8,
          cellPadding: 0,
          valign: "middle",
          fillColor: "black",
          textColor: "white"
        });
      }

      // Top-aligned rows (multi-line or numeric data)
      if (r === 1 && c <= 2) {
        setCell({
          minCellHeight: 8,
          fontSize: 8,
          cellPadding: { top: 1 },
          valign: "top"
        });
      }
      if (r === 5 || r === 7) {
        setCell({
          minCellHeight: 6,
          fontSize: 8,
          cellPadding: { top: 1 },
          valign: "top"
        });
      }

      // Bold row
      if (r === 2) {
        setCell({
          minCellHeight: 3,
          fontSize: 8,
          cellPadding: 0,
          valign: "middle",
          fontStyle: "bold"
        });
      }

      // Tall row
      if (r === 3) {
        setCell({
          minCellHeight: 15,
          fontSize: 8,
          cellPadding: 0,
          valign: "top"
        });
      }

      // Urdu text or image row
      if (r === 8) {
        setCell({ 
          minCellHeight: 30
        });  
      }
    }

  });

  //Please Visit for Duplicate Bill:
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: '   In case of non receipt or loss of bill,duplicate bill can be', styles: {lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0.1 }, halign: "left"} },
        { content: 'Quries regarding electric bills dia      ', styles: {lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0 }, halign: "right"} }
      ],
      [
        { content: '   obtained from Billing Offce before 5th of each month. ', styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0.1 } , halign: "left"} },
        { content: '042-35341623 (Ext.120-121-126 )   ', styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0 }, halign: "right" , fontStyle:"bold"} }
      ],
      [
        { content: 'Please Visit for Duplicate Bill: https://www.e-billingbahriatownlahore.com',colSpan:2, styles: { lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0.1 } } }
      ]
    ],
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: 'center',
      valign: 'middle',
      cellPadding:0
    },
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row,
        // column,
        cell } = data;
      const r = row.index;
      // const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if (r === 0 || r === 1){
        setCell({
          fontSize:8,
           cellPadding: { top: 0.5},
        })
      }
      if (r === 2){
        setCell({
          fillColor:[225, 225, 225],
          fontStyle:"bold"
        })
      }
        
    }
  });


  //Bill Amount
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: '',rowSpan:17, styles: {lineWidth:{top: 0.1, right: 0, bottom: 0.1, left: 0.1}} },
        { content: '> In case of Gazetted Holidays on due date, bill will be received by bank on next working day.',colSpan:4, styles: {lineWidth:{top: 0.1, right: 0.1, bottom: 0, left: 0}, cellPadding: {top:0.5}} }
      ],
      [
        { content: '> In case of non-payment of electric bill for one month your electricity will be disconnected.',colSpan:4, styles: {lineWidth:{top: 0, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: 'Connection will be restored on payment of Reconnection fee as under:-',colSpan:4, styles: {lineWidth:{top: 0, right: 0.1, bottom: 0.1, left: 0}} }
      ],
      [
        { content: 'Bill Amount', styles: {} },
        { content: 'Charges', styles: {} },
        { content: 'Bill Amount', styles: {} },
        { content: 'Charges', styles: {} }
      ],
      [
        { content: 'Up to 1,000', styles: {lineWidth:{top: 0.1, right: 0, bottom: 0, left: 0.1}} },
        { content: 'Rs.100/-', styles: {lineWidth:{top: 0.1, right: 0, bottom: 0, left: 0}} },
        { content: 'Between 15,001 to 50,000', styles: {lineWidth:{top: 0.1, right: 0, bottom: 0, left: 0}} },
        { content: 'Rs.2,500/-', styles: {lineWidth:{top: 0.1, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: '1,001 to 5,000', styles: {lineWidth:{top: 0, right: 0, bottom: 0, left: 0.1}} },
        { content: 'Rs.500/-', styles: {lineWidth:{top: 0, right: 0, bottom: 0, left: 0}} },
        { content: 'Between 50,001 to 1 Lac', styles: {lineWidth:{top: 0, right: 0, bottom: 0, left: 0}} },
        { content: 'Rs.5,000/-', styles: {lineWidth:{top: 0, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: '5,001 to 15,000', styles: {lineWidth:{top: 0, right: 0, bottom: 0.1, left: 0.1}} },
        { content: 'Rs.1000/-', styles: {lineWidth:{top: 0, right: 0, bottom: 0.1, left: 0}} },
        { content: 'Over 1 Lac', styles: {lineWidth:{top: 0, right: 0, bottom: 0.1, left: 0}} },
        { content: 'Rs.7,000', styles: {lineWidth:{top: 0, right: 0.1, bottom: 0.1, left: 0}} }
      ],
      [
        { content: '> Minimum Charges. A-1 Residential (Rs-200/-) A-2-a Commercial ( Rs-450/-) E-1-i Temp (Rs-600/- ) PEAK / OFF PEAK TIMINGS',colSpan:4, styles: {lineWidth:{top: 0.1, right: 0.1, bottom: 0.1, left: 0}} }
      ],
      [
        { content: 'Season',colSpan:2, styles: {} },
        { content: 'Peak Timing', styles: {} },
        { content: 'Off-Peak Timing', styles: {} }
      ],
      [
        { content: 'Dec to Feb',colSpan:2, styles: {} },
        { content: '5 PM to 9 PM', styles: {} },
        { content: 'Remaining 20 Hours', styles: {} }
      ],
      [
        { content: 'Mar to May',colSpan:2, styles: {} },
        { content: '6 PM to 10 PM', styles: {} },
        { content: '              -do-', styles: {} }
      ],
      [
        { content: 'Jun to Aug',colSpan:2, styles: {} },
        { content: '7 PM to 11 PM', styles: {} },
        { content: '              -do-', styles: {} }
      ],
       [
        { content: 'Sep to Nov',colSpan:2, styles: {} },
        { content: '6 PM to 10 PM', styles: {} },
        { content: '              -do-', styles: {} }
      ],
       [
        { content: 'FPA VAR',colSpan: 2, styles: {lineWidth:{top: 0.1, right: 0, bottom: 0, left: 0}, fontStyle:"bold"} },
        { content: '     -1909',colSpan:2, styles: {lineWidth:{top: 0.1, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: 'FPA ED',colSpan: 2, styles: {lineWidth:{top: 0, right: 0, bottom: 0, left: 0}, fontStyle:"bold"} },
        { content: '     -29',colSpan:2, styles: {lineWidth:{top: 0, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: 'FPA GST',colSpan: 2, styles: {lineWidth:{top: 0, right: 0, bottom: 0, left: 0}, fontStyle:"bold"} },
        { content: '     -349',colSpan:2, styles: {lineWidth:{top: 0, right: 0.1, bottom: 0, left: 0}} }
      ],
      [
        { content: '',colSpan: 4, styles: {lineWidth:{top: 0, right: 0.1, bottom: 0.1, left: 0}} }
      ]
    ],
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: 'center',
      valign: 'middle',
      cellPadding:0,
      fontSize:6
    },
    columnStyles: {
      0: { cellWidth: 85 }
    },
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row,
        // column,
        cell } = data;
      const r = row.index;
      // const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if(r === 0 || r === 1|| r === 2 || r === 7){
        setCell({
          halign: "left"
        })
      }
      if(r=== 3|| r === 4||r===5 || r===6){
        setCell({
          halign: "left",
         cellPadding: { top: 0.5,left: 3} 
        })
      }
      if(r>= 8 && r<=15){
        setCell({
          halign: "left",
          cellPadding: { top: 0.5,left: 1} 
        })
      }
      if(r=== 3){
        setCell({
          fillColor: "black",
          textColor: "white"
        })
      }
      if(r===1 || r===2 || r=== 8){
        setCell({
          fontStyle: "bold"
        })
      }
      if(r===16){
        setCell({
          minCellHeight: 25
        })
      }
      if(r===7){
        setCell({
          cellPadding:{top:0.5, bottom: 0.5}
        })
      }
        
    }
  });

   //Bank Copy
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: '--------------------------------------------------- CUT HERE --------------------------------------------------',colSpan: 6, styles: {} }
      ],
      [
        { content: 'Bank Copy', styles: {} },
        { content: 'BAHRIA TOWN PVT LTD - ELECTRICITY BILL',colSpan:3, styles: {fontStyle:"bold"} },
        { content: 'Reference No', styles: {} },
        { content: '100000000010', styles: {} }
      ],
      [
        { content: 'TAHIRA MALIK',colSpan:2, styles: {} },
        { content: '24    /   SAFARI    /    B', colSpan: 2, styles: {} },
        { content: 'Meter Number', styles: {} },
        { content: '66622020307', styles: {} }
      ],
      [
        { content: 'Bill Month',colSpan:2, styles: {} },
        { content: 'Due Date', styles: {} },
        { content: 'Barcode No.', styles: {} },
        { content: 'Total Payable', styles: {} },
        { content: '47390', styles: {fontStyle:"bold"} }
      ],
      [
        { content: 'September 2025',colSpan:2, styles: {} },
        { content: '08-Oct-2025', styles: {fontStyle:"bold"} },
        { content: 'BTL-10014', styles: {fontStyle:"bold"} },
        { content: 'Late Payment', styles: {} },
        { content: '50921', styles: {fontStyle:"bold"} }
      ],
      [
        { content: '--------------------------------------------------- CUT HERE --------------------------------------------------',colSpan: 6, styles: {} }
      ],
      [
        { content: 'BTL Copy', styles: {} },
        { content: 'BAHRIA TOWN PVT LTD - ELECTRICITY BILL',colSpan:3, styles: {fontStyle:"bold"} },
        { content: 'Reference No', styles: {} },
        { content: '100000000010', styles: {} }
      ],
      [
        { content: 'TAHIRA MALIK',colSpan:2, styles: {} },
        { content: '24    /   SAFARI    /    B', colSpan: 2, styles: {} },
        { content: 'Meter Number', styles: {} },
        { content: '66622020307', styles: {} }
      ],
      [
        { content: 'Bill Month',colSpan:2, styles: {} },
        { content: 'Due Date', styles: {} },
        { content: 'Barcode No.', styles: {} },
        { content: 'Total Payable', styles: {} },
        { content: '47390', styles: {fontStyle:"bold"} }
      ],
      [
        { content: 'September 2025',colSpan:2, styles: {} },
        { content: '08-Oct-2025', styles: {fontStyle:"bold"} },
        { content: 'BTL-10014', styles: {fontStyle:"bold"} },
        { content: 'Late Payment', styles: {} },
        { content: '50921', styles: {fontStyle:"bold"} }
      ]
      
    ],
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: 'center',
      valign: 'middle',
      cellPadding:{top: 0.5,bottom:0.5},
      fontSize:8,
    },
     columnStyles: {
      0: { cellWidth: 30 },
      1: { cellWidth: 30 }
    },

    // didParseCell: function (data) {
    //   if (data.section !== "body") return;

    //   const { row,
    //     // column,
    //     cell } = data;
    //   const r = row.index;
    //   // const c = column.index;

    //   // Helper to merge style properties
    //   const setCell = (styles) => Object.assign(cell.styles, styles);
 
    // }
  });











  //Electricity Table
  autoTable(doc, {
    startY: 56,
    margin: { left: 132 },
    tableWidth: 62.5,
    body: [
      ["Energy Charges", "-                 35308"],
      ["GST", "-                 6356"],
      ["OPC @ 9.9", "-                 8009"],
      ["PTV Fee", "-                 0"],
      ["FPA", "-                 -2287"],
      [{content:"For Commercial Consumers", colSpan:2, styles:{fontSize:9, halign: "center", fontStyle:"bold"}}],
      ["Further Tax", "-                 0"],
      ["Retailer Tax", "-                 0"],
      ["Extra Tax", "-                 0"],
      [{content:"", colSpan:2}],
      ["Current Bill", "47386"],
      ["Arrears", "0"],
      ["Total Payable", "47390"],
      ["L.P Surcharge", "3531"],
      ["Late Payment", "50921"]
    ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle"
    },
    columnStyles: {
      0: { cellWidth: 33 }
    },
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row,
        // column,
        cell } = data;
      const r = row.index;
      // const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if (r <= 4 || (r >= 6 && r <= 8)) {
        setCell({
          fontSize: 8,
          cellPadding: { top: 2 },
          halign: "left"
        })
      }
      if(r>=10 && r<=14){
        setCell({
          fontSize: 9,
          halign: "left",
          cellPadding: { top: 2 }
        })
      }
      if(r=== 12 || r===14){
        setCell({
          fontStyle: "bold"
        })
      }
    }
  });

  //Bank Account No (BTL Branch)
  autoTable(doc, {
    startY: 57,
    margin: { left: 74.5 },
    tableWidth: 55.5,
    body: [
      ["UBL Bank(PK60 UNIL0109000201226209)"],
      ["Faysal Bank(3130301900222504)"],
      ["Facilitation Center Bahria - Alfalah Plaza(only Cash)"],
      [""],
      ["Facilitation Center Bahria Orchard(only Cash)"],
      ["Bill Collection Timing From"],
      ["9:00 to 17:00(Only Working Days)"],
      [""],
      ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle",
      fontSize:6.5,
      cellPadding: {top:0.5},
      halign: "left"
    }
  });

  //BiLL History
  autoTable(doc, {
    startY: 156,
    margin: { left: 26 },
    tableWidth: 60,
    body: [
      [{content:"Month", colSpan:2}, "Units", "Bill", "Payment"],
      ["Jan", "2025", "150", "9810", "9810"],
      ["Feb", "2025", "154", "9800", "9800"],
      ["Mar", "2025", "221", "14660", "14660"],
      ["Apr", "2025", "436", "27780", "27780"],
      ["May", "2025", "605", "38010", "38010"],
      ["Jun", "2025", "1109", "69170", "69170"],
      ["Jul", "2025", "1069", "63670", "63670"],
      ["Aug", "2025", "1073", "64850", "64850"],
      ["Sep", "2025", "809", "47390", "0000"],
      ["Oct", "2025", "773", "50660", "50660"],
      ["Nov", "2024", "289", "18570", "18570"],
      ["Dec", "2024", "158", "9560", "9560"]
      ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle",
      halign: "center",
      fontSize:7,
      cellPadding: 0.3,
    },
    columnStyles:{
      0:{cellWidth: 10},
      1:{cellWidth: 10},
      2:{cellWidth: 15}
    },
     didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row,
        // column,
        cell } = data;
      const r = row.index;
      // const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if (r===0){
        setCell({
          fillColor:"black",
          textColor: "white"
        })
      }
    }
  });


 
  

 



  // // ✅ Customer Details
  // autoTable(doc, {
  //   startY: 26.2,
  //   margin: { left: 34.2 },
  //   tableWidth: 161.7, // table ki fixed width
  //   body: [
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "100000000010", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "1", styles: { fontSize: 9 } },
  //       { content: billingData.block || "September 2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "20-Sep-2025", styles: { fontSize: 9 } },
  //        { content: billingData.block || "25-Sep-2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "08-Oct-2025", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "100000000010", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "1", styles: { fontSize: 9 } },
  //       { content: billingData.block || "September 2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "20-Sep-2025", styles: { fontSize: 9 } },
  //        { content: billingData.block || "25-Sep-2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "08-Oct-2025", styles: { fontSize: 9 } }
  //     ]
  //   ],
  //   theme: "grid",
  //   bodyStyles: {
  //     fillColor: false,
  //     textColor: [0, 0, 0],
  //     lineColor: [0, 0, 0],
  //     halign: "center",
  //   },
  //   columnStyles: {
  //     // 0: { cellWidth: 20 }
  //   },
  //   didParseCell: function (data) {
  //     if (data.section === "body") {
  //       if (data.row.index === 1) {
  //         data.cell.styles.minCellHeight = 50;
  //          data.cell.styles.fillColor = [255, 200, 200];
  //       }
  //       if (data.row.index === 2) {
  //         data.cell.styles.minCellHeight = 35;
  //       }
  //     }
  //   }
  // });



  



  window.open(doc.output("bloburl"), "_blank");
};

