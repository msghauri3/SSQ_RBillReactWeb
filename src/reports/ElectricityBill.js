import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// import JsBarcode from "jsbarcode";

// ⚡ Electricity Bill PDF Generator (Single Table)
export const generateElectricityPDF = (data, projects) => {

  const doc = new jsPDF("p", "mm", "a4");

  //Header
  autoTable(doc, {
    head: [],
    body: [
      [
        "", { content: "BAHRIA ENCLAVE - ELECTRICITY BILL\nYOUR LIFE STYLE DESTINATION", }, ""
      ]
    ],
    theme: "grid",
    // margin: { top: 10 },
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle",
      fontsize: 7,
      fontStyle: "bold"
    },
    columnStyles: {
      0: { cellWidth: 20 },
      2: { cellWidth: 25 },
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

      // Header-style rows (black background)
      if (r === 0) {
        setCell({
          minCellHeight: 15,

        });
      }


    },
  });

  let headerY = doc.lastAutoTable.finalY;


  //Body - 1
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: "KUICK PAY REFRENCE", colSpan: 3, styles: {} },
        { content: "CON.DATE", styles: {} },
        { content: "BILLING MONTH", colSpan: 2, styles: {} },
        { content: "Validity DATE", styles: {} },
        { content: "Issue DATE", styles: {} },
        { content: "DUE DATE ", styles: {} }
      ],
      [
        { content: "0055053651", colSpan: 3, styles: {} },
        { content: "18-May-23", styles: {} },
        { content: "September-2025", colSpan: 2, styles: {} },
        { content: "20-Oct-25", styles: {} },
        { content: "3-Oct-25", styles: {} },
        { content: "13-Oct-25", styles: {} }
      ],
      [
        { content: "REF NO", styles: {} },
        { content: "TARIFF", styles: {} },
        { content: "LOAD", styles: {} },
        { content: "METER TYPE", styles: {}, },
        { content: "BANK BRANCHES", colSpan: 2, styles: {} },
        { content: "", colSpan: 3, rowSpan: 15, styles: {} }
      ],
      [
        { content: "53651-H-25", styles: {} },
        { content: "A-1b(03T)", styles: {} },
        { content: "", styles: {} },
        { content: "Residential", styles: {} },
        { content: "Bank Islami - (3084)\nUBL - (0287)\nBAHRIA ENCLAVE UTILITY", colSpan: 2, styles: { halign: "left" } }
      ],
      [
        { content: "NAME & ADDRESS", colSpan: 2, styles: {} },
        { content: "Plot Status", styles: {} },
        { content: "Occupied", styles: {} },
        { content: "PLOT SIZE", styles: {} },
        { content: "", styles: {} }
      ],
      [
        { content: "Khuram Shahzad\n\nP# 25.00, ST#", colSpan: 6, styles: { halign: "left" } }
      ],
      [
        { content: "Meter No", styles: {} },
        { content: "Previous", styles: {} },
        { content: "Present", styles: {} },
        { content: "MF", styles: {} },
        { content: "Units", styles: {} },
        { content: "Status", styles: {} }
      ],
      [
        { content: "1156013", styles: {} },
        { content: "776\n\n3,809", styles: {} },
        { content: "799\n\n3,933", styles: {} },
        { content: "1.00", styles: {} },
        { content: "23\n\n124", styles: {} },
        { content: "", styles: {} }
      ],
      [
        { content: "TOTAL UNITS\nCONSUMED", styles: {} },
        { content: "ERGY\nCHARGES", colSpan: 2, styles: {} },
        { content: "N.J\nSurcharge", styles: {} },
        { content: "ADV.\nPAYMENT", styles: {} },
        { content: "INCOME TAX", styles: {} }
      ],
      [
        { content: "147", styles: {} },
        { content: "6104", colSpan: 2, styles: {} },
        { content: "0", styles: {} },
        { content: "0", styles: {} },
        { content: "0", styles: {} }
      ],
      [
        { content: "QTR\nRECOVERY", styles: {} },
        { content: "QTR\nADJUSTMENT", styles: {} },
        { content: "QTR\nREFUND", styles: {} },
        { content: "Further\nTax", styles: {} },
        { content: "TARIFF ADJUSTMENT", colSpan: 2, styles: {} }
      ],
      [
        { content: "0", styles: {} },
        { content: "-278", styles: {} },
        { content: "0", styles: {} },
        { content: "0", styles: {} },
        { content: "1176", colSpan: 2, styles: {} }
      ],
      [
        { content: "P.T.V Fee", styles: {} },
        { content: "G.S.T", styles: {} },
        { content: "E Tax", styles: {} },
        { content: "F.C.S", styles: {} },
        { content: "INSTALLMEMTS", colSpan: 2, styles: {} }
      ],
      [
        { content: "0", styles: {} },
        { content: "1134", styles: {} },
        { content: "0", styles: {} },
        { content: "475", styles: {} },
        { content: "0", colSpan: 2, styles: {} }
      ],
      [
        { content: "ADVANCE TAX", styles: {} },
        { content: "MDI FIXED CHARGES", colSpan: 2, styles: {} },
        { content: "E.D", styles: {} },
        { content: "DEFERED AMOUNT", colSpan: 2, styles: {} }
      ],
      [
        { content: "0", styles: {} },
        { content: "1000", colSpan: 2, styles: {} },
        { content: "0", styles: {} },
        { content: "0", colSpan: 2, styles: {} }
      ],
      [
        { content: "GRID\nBTPL", styles: { fontStyle: "bold", fontSize: 6.7 } },
        { content: "BILL\nCALCULATION", styles: { fontStyle: "bold", fontSize: 6.5 } },
        { content: "40.53       -       0       =       40.53       x       124\n\n46.85       -       0       =       46.85       x        23 ", colSpan: 4, styles: {} }
      ]
    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle",
      fontSize: 6,

      // cellPadding: 0
    },
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: 20 },
      2: { cellWidth: 18 },
      3: { cellWidth: 20 },
      4: { cellWidth: 18 },
      5: { cellWidth: 18 },
      8: { cellWidth: 25 },
    },
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const {
        row,
        column,
        cell,
      } = data;
      const r = row.index;
      const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if ((r === 0 || r === 2 || r === 4 || r === 6 || r === 8 || r === 10 || r === 12 || r === 14) && !(r === 4 && c === 3)) {
        setCell({
          fontSize: 6.7,
          fontStyle: "bold"
        });
      }
      if (r === 1 || r === 3 || r === 5 || r === 7 || r === 9 || r === 11 || r === 13 || r === 15) {
        setCell({
          fontSize: 6.5,
        });
      }
      if (r === 5) {
        setCell({
          fontSize: 7,
        });
      }

    },
  });

  let bodyY = doc.lastAutoTable.finalY;

  //Reading Time
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: "", colSpan: 3, styles: {} },
        { content: "FPA for Jul-25 @ -1.7856/KWH", styles: { valign: "bottom", fontStyle: "bold" } }
      ]
    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle",
      fontSize: 7.5
    },
    columnStyles: {
      0: { cellWidth: 94 }
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

      // Header-style rows (black background)
      if (r === 0) {
        setCell({
          minCellHeight: 50,

        });
      }


    },
  });



  //BTPL-Copy
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [],
    body: [
      [
        { content: "------------------------------------------------------------------- CUT HERE ------------------------------------------------------------------", colSpan: 5, styles: {} }
      ],
      [
        { content: "BTPL Copy", styles: {} },
        { content: "BAHRIA ENCLAVE ISLAMABAD - ELECTRICITY BILL | Bank Islami (3084) | UBL (2087)", colSpan: 4, styles: {} }
      ],
      [
        { content: "", styles: {} },
        { content: "P# 25.00, ST#", colSpan: 2, styles: {} },
        { content: "METER NO", styles: {} },
        { content: "1156013", styles: {}, }
      ],
      [
        { content: "Billing Month", styles: {} },
        { content: "DUE DATE", styles: {} },
        { content: "REFRENCE NO", styles: {} },
        { content: "AMOUNT DUE DATE", styles: {} },
        { content: "10,446", styles: {} }
      ],
      [
        { content: "September-2025", styles: {} },
        { content: "13-Oct-25", styles: {} },
        { content: "53651-H-25", styles: {} },
        { content: "AFTER DATE", styles: {} },
        { content: "11,253", styles: {} }
      ],
      [
        { content: "------------------------------------------------------------------- CUT HERE ------------------------------------------------------------------", colSpan: 5, styles: {} }
      ],
      [
        { content: "Bank Copy", styles: {} },
        { content: "BAHRIA ENCLAVE ISLAMABAD - ELECTRICITY BILL | Bank Islami (3084) | UBL (2087)", colSpan: 4, styles: {} }
      ],
      [
        { content: "", styles: {} },
        { content: "P# 25.00, ST#", colSpan: 2, styles: {} },
        { content: "METER NO", styles: {} },
        { content: "1156013", styles: {}, }
      ],
      [
        { content: "Billing Month", styles: {} },
        { content: "DUE DATE", styles: {} },
        { content: "REFRENCE NO", styles: {} },
        { content: "AMOUNT DUE DATE", styles: {} },
        { content: "10,446", styles: {} }
      ],
      [
        { content: "September-2025", styles: {} },
        { content: "13-Oct-25", styles: {} },
        { content: "53651-H-25", styles: {} },
        { content: "AFTER DATE", styles: {} },
        { content: "11,253", styles: {} }
      ]
    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle",
      fontSize: 6.5,
      // cellPadding: 0
    },
    columnStyles: {
      0: { cellWidth: 30 },
      3: { cellWidth: 40 },
      4: { cellWidth: 35 },
    },
    didParseCell: function (data) {
      if (data.section !== "body") return;

      const {
        row,
        column,
        cell,
      } = data;
      const r = row.index;
      const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      if (r === 1 || r === 3 || r === 6 || r === 8) {
        setCell({
          fontSize: 7,
          fontStyle: "bold"
        });
      }
      if (c === 3) {
        setCell({
          fontStyle: "bold"
        });
      }


    },
  });





  //Bill History
  autoTable(doc, {
    startY: headerY + 14,
    margin: { left: 130 },
    tableWidth: 64,
    body: [
      [{ content: "MONTH", colSpan: 2 }, "UNITS", "BILL", "PAYMENT"],
      ["JAN", "2025", "146", "11016", "11016"],
      ["FEB", "2025", "137", "10507", "0"],
      ["MAR", "2025", "117", "20154", "20514"],
      ["APR", "2025", "193", "14148", "14148"],
      ["MAY", "2025", "156", "11867", "11867.00"],
      ["JUNE", "2025", "237", "15793", "15793"],
      ["JULY", "2025", "173", "12003", "12003"],
      ["AUG", "2025", "156", "11149", "11149"],
      ["SEP", "2024", "470", "97489", "97489"],
      ["OCT", "2024", "295", "21155", "0"],
      ["NOV", "2024", "162", "13944", "0"],
      ["DEC", "2024", "172", "48906", "49950"],
      [{ content: ".", colSpan: 5, styles: { lineWidth: { top: 0.1, bottom: 0.1, left: 0, right: 0 }, minCellHeight: 0, cellPadding: 0 } }],
      [{ content: "CURRENT BILL", colSpan: 3 }, { content: "9,611", colSpan: 2 }],
      [{ content: "ARREARS", colSpan: 3 }, { content: "0", colSpan: 2 }],
      [{ content: "FUEL PRICE ADJ.", colSpan: 3 }, { content: "-365", colSpan: 2 }],
      [{ content: "TOTAL ELECTRIC BILL", colSpan: 3 }, { content: "9,246.00", colSpan: 2 }],
      [{ content: "MISC CHARGES", colSpan: 3 }, { content: "1,200", colSpan: 2 }],
      [{ content: "MISC ARREARS", colSpan: 3 }, { content: "0", colSpan: 2 }],
      [{ content: "AMOUNT DUE DATE", colSpan: 3 }, { content: "10,446", colSpan: 2 }],
      [{ content: "L.P SURCHARGE", colSpan: 3 }, { content: "807", colSpan: 2 }],
      [{ content: "AMOUNT AFTER DATE", colSpan: 3 }, { content: "11,253", colSpan: 2 }],
    ],
    theme: "grid",
    styles: {
      halign: "center",
      valign: "middle",
      fontSize: 7,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      fillColor: false
    },
    columnStyles: {
      0: { cellWidth: 10 },
      1: { cellWidth: 10 },
      2: { cellWidth: 13 },
      // 3: { cellWidth: 60 },
      4: { cellWidth: 15 },
    },

    didParseCell: function (data) {
      if (data.section !== "body") return;

      const { row, column, cell } = data;
      const r = row.index;
      const c = column.index;

      // Helper to merge style properties
      const setCell = (styles) => Object.assign(cell.styles, styles);

      // Apply to both upper (0–12) and lower (14–22) sections
      if ((r >= 0 && r <= 12) || (r >= 14 && r <= 22)) {
        setCell({
          cellPadding: 1.15,
        });
      }
      if (r === 0) {
        setCell({
          fontStyle: "bold"
        });
      }

      // 🔹 Specific rows styling
      if (r >= 14 && r <= 22 && c === 0) {
        setCell({
          fontStyle: "bold",
          halign: "left"
        });
      }
      if (r >= 14 && r <= 22 && c === 3) {
        setCell({
          halign: "right"
        });
      }
    },

  });

  //Bank Account No (BTL Branch)
  autoTable(doc, {
    startY: bodyY + 3,
    margin: { left: 17 },
    tableWidth: 65,
    body: [
      ["Reading time: 2025-09-28 08:25:18"],
      ["1. Incase of non reciept or loss of bill , duplicate bill can be"],
      ["obtained from Billing Office before 8th of each month"],
      ["2. Incase of arrears your connection will be disconnected"],
      ["without any notice"]
    ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle",
      fontSize: 7,
      cellPadding: 0.5,
      halign: "left",
    },
  });




  //Images
  doc.addImage("logo.png", "PNG", 17, 14.5, 14, 14);
  doc.addImage("bahria_enclave1.png", "PNG", 172, 15, 23, 13);

  // x, y = position; w, h = image width/height
  const x1 = 110, x2 = 153, y = bodyY + 1.5, w = 41, h = 41;

  doc.addImage("reading1.png", "PNG", x1, y, w, h);
  doc.addImage("reading2.png", "PNG", x2, y, w, h);
  // 🔹 Step 2: Border draw karo
  doc.setLineWidth(0.4);       // border thickness
  doc.setDrawColor(0, 0, 0);   // black border color
  doc.rect(x1, y, w, h);        // draw rectangle same size as image
  doc.rect(x2, y, w, h);        // draw rectangle same size as image




  // Open in new tab
  // window.open(doc.output("bloburl"), "_blank");


  const fileName = `Electricity 10014 September 2025.pdf`;
  const blob = doc.output("blob");
  const blobUrl = URL.createObjectURL(blob);

  // ✅ Replace emoji favicon with PNG from public folder
  // (make sure "logo.png" exists inside "public")
  // const faviconUrl = `${window.location.origin}/lightning.png`;
  const faviconUrl = "lightning.png";


  // ✅ HTML structure
  const html = `
<html>
  <head>
    <title>${fileName.replace(".pdf", "")}</title>

    <!-- PNG favicon -->
    <link rel="icon" href="${faviconUrl}" type="image/png" />

    <style>
      body {
        margin: 0;
        background: #f4f4f4;
        font-family: 'Segoe UI', sans-serif;
      }
      .download-btn {
        position: fixed;
        top: 7px;
        right: 95px;
        background: #1976d2;
        color: white;
        padding: 10px 18px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      }
      .download-btn:hover {
        background: #0d47a1;
      }
      embed {
        border: none;
      }
    </style>
  </head>
  <body>
    <a href="${blobUrl}" download="${fileName}" class="download-btn">⬇ Download Bill</a>
    <embed src="${blobUrl}" type="application/pdf" width="100%" height="100%" />
    <script>
      window.addEventListener('unload', () => URL.revokeObjectURL("${blobUrl}"));
    </script>
  </body>
</html>
`;

  const newTab = window.open();
  newTab.document.open();
  newTab.document.write(html);
  newTab.document.close();

};
