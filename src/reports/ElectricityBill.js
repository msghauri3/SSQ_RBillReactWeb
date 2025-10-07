// src/reports/ElectricityBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateElectricityPDF = (billingData, projects) => {

  // if (!billingData.billingType || !billingData.btNo || !billingData.sector) {
  //   alert('Please fill all required fields!');
  //   return;
  // }

  const doc = new jsPDF("p", "mm", "a4");

    // // Generate Barcode
    // const canvas = document.createElement("canvas");
    // JsBarcode(canvas, "BTL-10743August2025", {
    //   format: "CODE39",
    //   displayValue: true,
    //   fontSize: 14,
    // });
    // const imgData = canvas.toDataURL("image/png");
    // doc.addImage(imgData, "PNG", 70, 50, 70, 20);


  // Images
  doc.addImage("logo.png", "PNG", 15, 24, 18, 18);

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
        // { content: 'UBL Bank(PK60 UNIL0109000201226209)\nFaysal Bank(3130301900222504)\nFacilitation Center Bahria-Alfalah Plaza (only Cash)\nFacilitation Center Bahria Orchard (only Cash)\nBill Collection Timing From\n9:00 to 17:00 (Only Working Days)', colSpan: 2, rowSpan: 3, styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0.1, left: 0 }, cellPadding: 0, fontSize: 7 } },
        { content: 'Bank Details', colSpan: 2, rowSpan: 3, styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0.1, left: 0 }, cellPadding: 0, fontSize: 10 } },
        { content: 'Electricity Details', rowSpan: 9, styles: {} },
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
        { content: '809', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0.1 } } },
        { content: '51.5', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } },
        { content: '41664', styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } },
        { content: '0', colSpan: 2, styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0 } } }
      ],
      [
        { content: 'Urdu Content Image', colSpan: 5, styles: {} }
      ],
      [
        { content: 'Complaint Office (Mohlanwal) 042-35341646\nComplaint Office (Orchard)     042-35470996   042-35470997\nComplaint Office (Nasheman) 042-35935515', colSpan: 5, styles: { lineWidth: { top: 0.1, right: 0, bottom: 0.1, left: 0.1 }, cellPadding: 0.5, fontSize: 8, fontStyle: "bold", halign: "left" } }
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
      if ((r === 1 && c <= 2) || r === 5 || r === 7) {
        setCell({
          minCellHeight: 8,
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
        setCell({ minCellHeight: 30 });
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
        { content: 'History Tale',rowSpan:8, styles: {} },
        { content: '> In case of Gazetted Holidays on due date, bill will be received by bank on next working day.',colSpan:4, styles: {} }
      ],
      [
        { content: '> In case of non-payment of electric bill for one month your electricity will be disconnected',colSpan:4, styles: {} }
      ],
      [
        { content: 'Connection will be restored on payment of Reconnection fee as under:-',colSpan:4, styles: {} }
      ],
      [
        { content: 'Bill Amount', styles: {} },
        { content: 'Charges', styles: {} },
        { content: 'Bill Amount', styles: {} },
        { content: 'Charges', styles: {} }
      ],
      [
        { content: 'Up to 1,000', styles: {} },
        { content: 'Rs.100/-', styles: {} },
        { content: 'Between 15,001 to 50,000', styles: {} },
        { content: 'Rs.2,500/-', styles: {} }
      ],
      [
        { content: '1,001 to 5,000', styles: {} },
        { content: 'Rs.500/-', styles: {} },
        { content: 'Between 50,001 to 1 Lac', styles: {} },
        { content: 'Rs.5,000/-', styles: {} }
      ],
      [
        { content: '5,001 to 15,000', styles: {} },
        { content: 'Rs.1000/-', styles: {} },
        { content: 'Over 1 Lac', styles: {} },
        { content: 'Rs.7,000', styles: {} }
      ],
      [
        { content: '> Minimum Charges. A-1 Residential (Rs-200/-) A-2-a Commercial ( Rs-450/-) E-1-i Temp (Rs-600/- ) PEAK / OFF PEAK TIMINGS',colSpan:4, styles: {} }
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
      0: { cellWidth: 90 }
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

    //   if (r === 0 || r === 1){
    //     setCell({
    //       fontSize:8,
    //        cellPadding: { top: 0.5},
    //     })
    //   }
    //   if (r === 2){
    //     setCell({
    //       fillColor:[225, 225, 225],
    //       fontStyle:"bold"
    //     })
    //   }
        
    // }
  });



  // //Dummy
  // autoTable(doc, {
  //   startY: doc.lastAutoTable.finalY,
  //   head: [],
  //   body: [
  //     [
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} }
  //     ],
  //     [
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} }
  //     ],
  //     [
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} }
  //     ],
  //     [
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} },
  //       { content: 'Route ID - UD', styles: {} },
  //       { content: 'TARIFF', styles: {} }
  //     ]
  //   ],
  //   theme: 'grid',
  //   bodyStyles: {
  //     fillColor: false,
  //     textColor: [0, 0, 0],
  //     lineColor: [0, 0, 0],
  //     halign: 'center',
  //     valign: 'middle'
  //   },
  //   columnStyles: {
  //     // 0: { cellWidth: 20 },
  //     // 1: { cellWidth: 20 }
  //   }

  // });

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

