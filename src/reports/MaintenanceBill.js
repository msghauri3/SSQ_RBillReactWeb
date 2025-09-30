// src/reports/ElectricityBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateMaintenancePDF = (billingData, projects) => {
  const doc = new jsPDF("p", "mm", "a4");

  doc.addImage("Bahria_Town_Logo.png", "PNG", 16, 15, 16, 18);

  //Header
     autoTable(doc, {
       head: [],
       body: [
         [
           { content: "", rowSpan: 2, styles: { valign: "middle" } },
           {
             content:
               "BAHRIA TOWN PVT LTD - MAINTENANCE BILL\nYOUR LIFE STYLE DESTINATION",
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

  // ✅ Customer Details
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
        { content: "Name", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "BT No", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Block", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Sector", styles: { fontStyle: "bold", fontSize: 8 } }
      ],
      [
        { content: billingData.customerName || "", styles: { fontSize: 9 } },
        { content: billingData.btNo || "", styles: { fontSize: 9 } },
        { content: billingData.block || "", styles: { fontSize: 9 } },
        { content: billingData.sector || "", styles: { fontSize: 9 } }
      ]
    ],
    theme: "grid",
       bodyStyles: {
         fillColor: false,
         textColor: [0, 0, 0],
         lineColor: [0, 0, 0],
         halign: "center",
       }
  });

  // ✅ Billing Info
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
        { content: "Invoice No", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Customer No", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Billing Month", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Billing Year", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Due Date", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Bill Amount After Due Date", styles: { fontStyle: "bold", fontSize: 8 } },
        { content: "Project", styles: { fontStyle: "bold", fontSize: 8 } }
      ],
      [
        { content: billingData.invoiceNo || "", styles: { fontSize: 9 } },
        { content: billingData.customerNo || "", styles: { fontSize: 9 } },
        { content: billingData.billingMonth || "", styles: { fontSize: 9 } },
        { content: billingData.billingYear || "", styles: { fontSize: 9 } },
        { content: billingData.dueDate ? new Date(billingData.dueDate).toLocaleDateString() : "", styles: { fontSize: 9 } },
        { content: billingData.billAmountAfterDueDate?.toString() || "", styles: { fontSize: 9 } },
        { content: billingData.project || "", styles: { fontSize: 9 } }
      ]
    ],
     theme: "grid",
       bodyStyles: {
         fillColor: false,
         textColor: [0, 0, 0],
         lineColor: [0, 0, 0],
         halign: "center",
       }
  });

  window.open(doc.output("bloburl"), "_blank");
};

