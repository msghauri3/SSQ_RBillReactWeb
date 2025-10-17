// src/reports/MaintenanceBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateMaintenancePDF = (billingData, projects) => {


  const doc = new jsPDF("p", "mm", "a4");

  

  //Header
  autoTable(doc, {
    head: [],
    body: [
      [
        { content: "", rowSpan: 5, styles: { valign: "middle" } },
        {
          content:
            "BAHRIA TOWN PVT-SERVICES & MAINTENANCE",
          colSpan: 4,
          styles: {
            lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 },
            fontStyle: "bold",
            font: "helvetica",
            fontSize: 13,
            minCellHeight: 7,
            cellPadding: { top: 1.5 },
            halign: "center",
          },
        },
      ],
      [
        {
          content: "YOUR LIFE STYLE DESTINATION",
          colSpan: 4,
          styles: {
            lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0.1 },
            fontSize: 6,
            minCellHeight: 4,
            // fontStyle: 'bold',
            cellPadding: { left: 26.5 },
            halign: "Left",
          },
        },

      ],

      [
        { content: `Sindhu \nPloNo  12 \nBlock  safari villas   Sector  B`, colSpan: 3, styles: { halign: "left", fontSize: 8 } },
        { content: "", rowSpan: 3, styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0.1 } } },
      ],


      [
        { content: "BILLING MONTH", styles: { fontSize: 7 } },
        { content: "ISSUE DATE", styles: { fontSize: 7 } },
        { content: "DUE DATE", styles: { fontSize: 7 } },
      ],

      [
        { content: `september\n2025`, styles: { fontSize: 8 } },
        { content: 1-1-2025, styles: { fontSize: 8 } },
        { content: 1-1-2025, styles: { fontSize: 8 } },
      ],

    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 32 },
      4: { cellWidth: 65 }
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

      if (r === 3) {
        setCell({
          minCellHeight: 1,
          fillColor: [190, 190, 190],
          cellPadding: 0.2,
        })

      }

      if (r === 4) {
        setCell({
          minCellHeight: 15
        })

      }

    }
  });


  
  window.open(doc.output("bloburl"), "_blank");

 
};

