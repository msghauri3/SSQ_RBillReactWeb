// src/reports/MaintenanceBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateMaintenancePDF = (data, projects) => {



  const doc = new jsPDF("p", "mm", "a4");

  

  //Header
  autoTable(doc, {
    head: [],
    body: [
      [
        { content: "", rowSpan: 3, styles: { valign: "middle" } },
        {
          content:
            "BAHRIA ENCLAVE - SERVICES BILL -Your Lifestyle Destinaton",
          colSpan: 5,
          styles: {
            lineWidth: { top: 0.2, right: 0.1, bottom: 0.2, left: 0.1 },
            fontStyle: "bold",
            font: "helvetica",
            fontSize: 9,
            minCellHeight: 7,
            cellPadding: { top: 3 , bottom:2 },
            halign: "center",
          },
        },
      ],
      

      [
        { content: "KuickPay Refrence", styles: { halign: "center", fontSize: 7,fontStyle:'bold' } },
        { content: "BILLING MONTH", styles: { halign: "center", fontSize: 7,fontStyle:'bold'  } },
        { content: "Valid Till", styles: { halign: "center", fontSize: 7,fontStyle:'bold' } },
        { content: "Issue Date", styles: { halign: "center", fontSize: 7,fontStyle:'bold'  } },
        { content: "Due Date", styles: { halign: "center", fontSize: 7 ,fontStyle:'bold' } },
      ],


      [
        { content: "0155021656", styles: { halign: "center", fontSize: 7 } },
        { content: "September-2025", styles: { halign: "center", fontSize: 7  } },
        { content: "20-Oct-25", styles: { halign: "center", fontSize: 7 } },
        { content: "22-Sep-25", styles: { halign: "center", fontSize: 7  } },
        { content: "13-Oct-25", styles: { halign: "center", fontSize: 7  } },
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
      2: { cellWidth: 30},
      3: { cellWidth: 30 },
      4: { cellWidth: 30 },
      5: { cellWidth: 30 }
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
         // minCellHeight: 1,
          //fillColor: [190, 190, 190],
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


let HeaderY = doc.lastAutoTable.finalY;

  //Header Table
autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
        { content: "New Refrence", styles: { halign: "center", fontSize: 7 ,fontStyle:'bold'} },
        { content: "BANKS", styles: { halign: "center", fontSize: 7 ,fontStyle:'bold'  } },
        { content: "",rowSpan: 4,styles: {lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 },halign: "center", fontSize: 7 } },
       
      ],


      [
        
        { content: "21656-H-3", styles: { halign: "center", fontSize: 7 } },
        { content: "Bank Islami - (3084)   \n\n UBL - (0287)", styles: { halign: "center", fontSize: 7  } },
       
      ],

      [
        { content: "KEEP BAHRIA ENCLAVE CLEAN & GREEN",colSpan:2, styles: { textColor:"Red",halign: "left", fontSize: 8,fontStyle:"bold" } },
       
      ],


      [
        { content: "Mumtaz Hussain     \n\nP# 3, ST# 16.00, SEC PHASE H",colSpan:2, styles: { halign: "left", fontSize: 7, } },
        
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
      0: { cellWidth: 40 },
      1: { cellWidth: 51.7 },
     // 4: { cellWidth: 65 }
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


       if (r === 1) {
        setCell({
          //minCellHeight: 5,
          //fillColor: [190, 190, 190],
          cellPadding: 4,
        })

      }
      if (r === 2) {
        setCell({
          //minCellHeight: 5,
          //fillColor: [190, 190, 190],
          cellPadding: 3,
        })

      }

      if (r === 3) {
        setCell({
          //minCellHeight: 5,
          //fillColor: [190, 190, 190],
          cellPadding: 4,
        })

      }

      
    }
  });


let HeaderTableY = doc.lastAutoTable.finalY;

  //Table
autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
        { content: "", styles: {  } },
        { content: "History", styles: {lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0.1 },  } },
        
      ],
   
    ],
      
    
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      minCellHeight:94,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 91.7},
      //1: { cellWidth: 50 },
     // 4: { cellWidth: 65 }
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

    //   if (r === ) {
    //     setCell({
    //      minCellHeight: 50,
    //       //fillColor: [190, 190, 190],
    //      // cellPadding: 0.2,
    //     })

    //   }

      
    // }
  });
  


let MaintChargesY = doc.lastAutoTable.finalY;

 //Office copy
autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
       
        { content: '--------------------------------------------------     CUT HERE    ----------------------------------------------', colSpan: 5, styles: { halign: "center" } }
      
      ],
      
      [
        { content: "",styles: { valign: "middle" } },
        {
          content:
            "BAHRIA ENCLAVE - SERVICES BILL (OFFICE COPY)",
          colSpan: 4,
          styles: {
            lineWidth: { top: 0.2, right: 0.1, bottom: 0.2, left: 0.1 },
            fontStyle: "bold",
            font: "helvetica",
            valign:"middle",
            fontSize: 9,
            minCellHeight: 7,
            cellPadding: { top: 3 , bottom:2 },
            halign: "center",
          },
        },
      ],

      
      
      [
        { content: "Plot/Street/Sector", styles: { fontSize: 7, } },
        { content: "P# 3, ST# 16.00, SEC PHASE H",colSpan:2, styles: { fontSize: 7, } },
        { content: "Meter No", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "1151154", styles: {halign:"right",fontSize: 7, } },
      ],


      [
        { content: "Billing Month", styles: { fontSize: 7, } },
        { content: "Due Date", styles: { fontSize: 7, } },
        { content: "New Refrence Number", styles: { fontSize: 7, } },
        { content: "PAYMENT DUE DATE", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "4,913", styles: {halign:"right",fontSize: 7, } },
      ],


      [
        { content: "September-2025", styles: { fontSize: 7, } },
        { content: "13-October-2025", styles: { fontSize: 7, } },
        { content: "21656-H-3", styles: { fontSize: 7, } },
        { content: "PAYMENT AFTER DATE", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "5,377", styles: {halign:"right",fontSize: 7, } },
      ],
    ],
      
    
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      cellPadding:2.5
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 25 },
      4: { cellWidth: 25 }
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

      if (r === 1) {
        setCell({
          minCellHeight: 15,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
        })

      }

      
    }
  });

let OfficecopyY = doc.lastAutoTable.finalY;
//Bank copy
autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    body: [
      [
       
        { content: '--------------------------------------------------     CUT HERE    ----------------------------------------------', colSpan: 5, styles: { halign: "center" } }
      
      ],

      [
        { content: "", styles: { valign: "middle" } },
        {
          content:
            "BAHRIA ENCLAVE - SERVICES BILL (BANK COPY)",
          colSpan: 4,
          styles: {
            lineWidth: { top: 0.2, right: 0.1, bottom: 0.2, left: 0.1 },
            fontStyle: "bold",
            font: "helvetica",
            valign:"middle",
            fontSize: 9,
            minCellHeight: 7,
            cellPadding: { top: 3 , bottom:2 },
            halign: "center",
          },
        },
      ],

      
      
      [
        { content: "Plot/Street/Sector", styles: { fontSize: 7, } },
        { content: "P# 3, ST# 16.00, SEC PHASE H",colSpan:2, styles: { fontSize: 7, } },
        { content: "Meter No", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "1151154", styles: {halign:"right",fontSize: 7, } },
      ],


      [
        { content: "Billing Month", styles: { fontSize: 7, } },
        { content: "Due Date", styles: { fontSize: 7, } },
        { content: "New Refrence Number", styles: { fontSize: 7, } },
        { content: "PAYMENT DUE DATE", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "4,913", styles: {halign:"right",fontSize: 7, } },
      ],


      [
        { content: "September-2025", styles: { fontSize: 7, } },
        { content: "13-October-2025", styles: { fontSize: 7, } },
        { content: "21656-H-3", styles: { fontSize: 7, } },
        { content: "PAYMENT AFTER DATE", styles: {halign: "left", fontSize: 7,fontStyle:"bold" } },
        { content: "5,377", styles: {halign:"right",fontSize: 7, } },
      ],
    ],
      
    
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      cellPadding:2.5
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 25 },
      4: { cellWidth: 25 }
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

      if (r === 1) {
        setCell({
          minCellHeight: 15,
          //fillColor: [190, 190, 190],
         // cellPadding: 0.2,
        })

      }

      
    }
  });


//Maintenance Charges
autoTable(doc, {
    startY:HeaderTableY + 2,
    margin: { left:16},
    tableWidth: 80,
    body: [
      [
        { content: "Maintenance\nCharges", styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "4635", styles: {halign:"center", fontSize: 7, } },
        { content: "Advanve\nPayment", styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "Fine", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "0", styles: {halign:"center", fontSize: 7, } },
        { content: "Sales Tax", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "278", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "Meter\nNumber", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "1151154", styles: {halign:"center", fontSize: 7, } },
        { content: "MISC\nCharges", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
      ],

      [
        { content: "Plot Status", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "Occupied", styles: {halign:"center", fontSize: 7, } },
        { content: "Plot Size", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "5 Marla", styles: {halign:"center",fontSize: 7, } },
      ],

      [
        { content: "Deferred\nAmount", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "0", styles: {halign:"center", fontSize: 7, } },
        { content: "LPG/Security\n/Installment", styles: { fontSize: 7,fontStyle:"bold"  } },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
      ],
    

       [
        { content: "\n\n1:-Incase of non reciept or loss of bill , duplicate bill can be obtained from Billing Ofce before 8th of each month.  \n2:-Incase of arrears your services will be disconnected without any notce.\n3:-Service charges includes water,security,street light,roads , footpaths,electrician,plumber & garbage collecton.\n4:-Implementaton of sales tax is under the ordinance of ict tax on services ordinance 2001.\n\n\nThis bill only payable at Bahria Enclave Bank Branches ",colSpan:4,styles:{lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0},cellPadding:2.5, fontSize: 7, } },
        
      ],



    ],
    theme: "grid",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle",
      fontSize: 7,
      //cellPadding: { top: 0.5 },
      halignlign: "center"
    },
    
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 19 },
      2: { cellWidth: 25 },
      3: { cellWidth: 19 }
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

      if (r === 0) {
        setCell({
          minCellHeight: 10,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
        })

      }

      if (r === 1) {
        setCell({
          minCellHeight: 10,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
          //halign:"middle"
        })

      }

      if (r === 2) {
        setCell({
          minCellHeight: 10,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
        })

      }

      if (r === 3) {
        setCell({
          minCellHeight: 10,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
        })

      }

      if (r === 4) {
        setCell({
          minCellHeight: 10,
          //fillColor: [190, 190, 190],
          //cellPadding: 0.2,
        })

      }

      
    }

  });




  //Bill History
autoTable(doc, {
    startY:HeaderY + 2,
    margin: { left:108},
    tableWidth: 85,
    body: [
      [
        { content: "Month ", styles: {halign:"center", fontSize: 7,fontStyle:"bold" } },
        { content: "Year", styles: {halign:"center",  fontSize: 7,fontStyle:"bold" } },
        { content: "Amount", styles: {halign:"center",  fontSize: 7,fontStyle:"bold" } },
        { content: "Billed", styles: {halign:"center",fontSize: 7,fontStyle:"bold" } },
        { content: "Status", styles: {halign:"center",fontSize: 7,fontStyle:"bold" } },
      ],


      [
        { content: "JAN", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "FEB", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],

      [
       { content: "MAR", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],

      [
        { content: "APR", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],
    
      [
        { content: "MAY", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635 ", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "JUNE", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "JULY", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
        { content: "0", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "AUG", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635 ", styles: {halign:"center", fontSize: 7,} },
        { content: "10290", styles: {halign:"center",fontSize: 7, } },
        { content: "10290", styles: {halign:"center",fontSize: 7, } },
      ],



      [
        { content: "SEP", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "OCT", styles: {halign:"center", fontSize: 7 } },
        { content: "20250", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      [
        { content: "NOV", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],


      
      [
        { content: "DEC", styles: {halign:"center", fontSize: 7 } },
        { content: "2025", styles: {halign:"center", fontSize: 7, } },
        { content: "4635", styles: {halign:"center", fontSize: 7,} },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
        { content: "4913", styles: {halign:"center",fontSize: 7, } },
      ],
     
     [
        { content: "",colSpan:5, styles: {lineWidth: { top: 0.1, right: 0, bottom: 0, left: 0 }, } },
        
     
      ],

      [
        { content: "CURRENT BILL",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "4,913",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],
     

      [
        { content: "ARREARS / AGE",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "0",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],


      [
        { content: "TOTAL",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "4,913",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],


      [
        { content: "PAYMENT DUA DATE",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "4,913",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],


      [
        { content: "L.P . SURCHARGE",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "464",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],


      [
        { content: "PAYMENT AFTER DATE",colSpan:3, styles: { fontSize: 7,fontStyle:"bold" } },
        { content: "5,377",colSpan:2, styles: {halign:"right", fontSize: 7, } },
     
      ],



    ],
    theme: "grid",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      valign: "middle",
      fontSize: 7,
      //cellPadding: { top: 0.5 },
      halignlign: "center"
    },
    
    columnStyles: {
      72: { cellWidth: 25 },
      73: { cellWidth: 30 },
      //2: { cellWidth: 25 },
      //3: { cellWidth: 15 }
    },

    //  didParseCell: function (data) {
    //   if (data.section !== "body") return;

    //   const { row,
    //     // column,
    //     cell } = data;
    //   const r = row.index;
    //   // const c = column.index;

    //   // Helper to merge style properties
    //   const setCell = (styles) => Object.assign(cell.styles, styles);

    //   if (r === 0) {
    //     setCell({
    //       minCellHeight: 10,
    //       //fillColor: [190, 190, 190],
    //       //cellPadding: 0.2,
    //     })

    //   }

    //   if (r === 1) {
    //     setCell({
    //       minCellHeight: 10,
    //       //fillColor: [190, 190, 190],
    //       //cellPadding: 0.2,
    //     })

    //   }

    //   if (r === 2) {
    //     setCell({
    //       minCellHeight: 10,
    //       //fillColor: [190, 190, 190],
    //       //cellPadding: 0.2,
    //     })

    //   }

    //   if (r === 3) {
    //     setCell({
    //       minCellHeight: 10,
    //       //fillColor: [190, 190, 190],
    //       //cellPadding: 0.2,
    //     })

    //   }

    //   if (r === 4) {
    //     setCell({
    //       minCellHeight: 10,
    //       //fillColor: [190, 190, 190],
    //       //cellPadding: 0.2,
    //     })

    //   }

      
    // }

  });
  
// Images
  //doc.addImage("imageName", "type", x, y, width, height);
  doc.addImage("Logo.png", "PNG", 17, 15, 19, 19);
  doc.addImage("Logo.png", "PNG", 19.5,MaintChargesY+10, 13, 13);
  doc.addImage("Logo.png", "PNG", 19.5,OfficecopyY+10, 13, 13);
  

 // Open in new tab
  // window.open(doc.output("bloburl"), "_blank");


  const fileName = `Maintenance 10015 September 2025.pdf`;
  const blob = doc.output("blob");
  const blobUrl = URL.createObjectURL(blob);

  // ✅ Replace emoji favicon with PNG from public folder
  // (make sure "logo.png" exists inside "public")
  const faviconUrl = `${window.location.origin}/lightning.png`;

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
  
  //window.open(doc.output("bloburl"), "_blank");

 
};

