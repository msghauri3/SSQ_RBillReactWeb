// src/reports/ElectricityBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePDF = (billingData, projects) => {
  // if (!billingData.billingType || !billingData.btNo || !billingData.sector) {
  //   alert('Please fill all required fields!');
  //   return;
  // }

//   const doc = new jsPDF();
//   doc.setFontSize(16);
//   doc.text('BAHRIA TOWN - BILL RECEIPT', 14, 20);

//   autoTable(doc, {
//     startY: 30,
//     head: [['Field', 'Value']],
//     body: [
//       ['BT No', billingData.btNo],
//       ['Project', projects.find(p => p.value === billingData.project)?.label],
//       ['Billing Type', billingData.billingType === 'electricity' ? 'Electricity' : 'Maintenance'],
//     ]
//   });

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
    doc.addImage("Bahria_Town_Logo.png", "PNG", 16, 15, 16, 18);

    //Header
    autoTable(doc, {
      head: [],
      body: [
        [
          { content: "", rowSpan: 2, styles: { valign: "middle" } },
          {
            content:
              "BAHRIA TOWN PVT LTD - ELECTRICITY BILL\nYOUR LIFE STYLE DESTINATION",
            colSpan: 2,
            styles: {
              lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 },
              fontStyle: "bold",
              font: "helvetica",
              fontSize: 13,
              minCellHeight: 7,
              cellPadding: { top: 2, bottom: 1 },
            },
          },
        ],
        [
          {
            content: "   BTL-Lahore",
            // colSpan: 3,
            styles: {
              lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 },
              fontSize: 10,
              minCellHeight: 4,
              // fontStyle: 'bold',
              cellPadding: { top: 0.5, bottom: 0.5 },
              halign: "left",
            },
          },
          {
            content: "GST NO 07-02-8400-061-28  ",
            // colSpan: 3,
            styles: {
              lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0 },
              fontSize: 10,
              minCellHeight: 4,
              // fontStyle: 'bold',
              cellPadding: { top: 0.5, bottom: 0.5 },
              halign: "right",
            },
          },
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
        0: { cellWidth: 20 },
        // 1:{cellWidth:70},
        // 2:{cellWidth: 55}
      },
    });

    //Body -1
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      head: [],
      body: [
        [
          { content: "Name", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Barcode", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "House No", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Block", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Sector", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ],
        [
          { content: "SURRIYA RIAZ/ARIF RIAZ", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "BTL-10743", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "1", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "ALI", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "B", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ]
      ],
      theme: "grid",
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: "center",
        valign: "middle",
      },
      columnStyles:{
        0:{cellWidth: 66},
        1:{cellWidth: 25},
        3:{cellWidth: 24},
        2:{cellWidth: 43}
      }
    });

    //Body -1
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      head: [],
      body: [
        [
          { content: "Reference No", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Invoice No", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Billing Month", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Billing Year", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Reading Date", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Issue Date", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Due Date", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ],
        [
          { content: "100000007373", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "20250807373", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "August", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "2025", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "24-Aug-25", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "26-Aug-25", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "10-Sep-25", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ],
        [
          { content: "Tarrif", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Meter Type", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "MF@", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Meter Status", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "NTN NO", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "CNIC NO", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Sanctioned Load", styles: { fontStyle: "bold", minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ],
        [
          { content: "Residential", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "3-Phase", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "1", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "Connected", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "4250182443889", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: "", styles: { minCellHeight: 3.9, fontSize: 9, cellPadding: { top: 0.5, bottom: 0.5 } } }
        ]
      ],
      theme: "grid",
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: "center",
        valign: "middle",
      },
      columnStyles:{
        0:{cellWidth: 33},
        1:{cellWidth: 33},
        3:{cellWidth: 20.25},
        4:{cellWidth: 29}
      }
    });

  window.open(doc.output('bloburl'), '_blank');
};
