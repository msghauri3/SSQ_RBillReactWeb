import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
// import JsBarcode from "jsbarcode";
import "./ElecBillGenerator.css";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// import axios from 'axios';


const ElecBillGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  // const fetchData = async () => {
  //     const response = await axios.get('https://bahriatownlahore.free.beeceptor.com');
  //     return response.data;
  //   };

  const buildPDF = (data) => {
    const doc = new jsPDF('p', 'mm', 'a4');

    // // Generate Barcode
    // const canvas = document.createElement("canvas");
    // JsBarcode(canvas, "BTL-10743August2025", {
    //   format: "CODE39",
    //   displayValue: true,
    //   fontSize: 14,
    // });
    // const imgData = canvas.toDataURL("image/png");
    // doc.addImage(imgData, "PNG", 70, 50, 70, 20);

    // doc.addImage('btlogo.png', 'PNG', 15, 15, 18, 18);
    doc.addImage('Bahria_Town_Logo.png', 'PNG', 15, 15, 18, 18);
    doc.addImage('barcode.png', 'PNG', 50, 177.3, 110, 10);
    doc.addImage('reading1.png', 'PNG', 107, 204.5, 75, 37);
    doc.addImage('reading2.png', 'PNG', 107, 243.2, 37, 35);
    doc.addImage('reading3.png', 'PNG', 145, 243.2, 37, 35);

    //Header
    autoTable(doc, {
      head: [],
      body: [
        [
          { content: '', rowSpan: 4, styles: { valign: 'middle' } },
          {
            content: 'BAHRIA TOWN (Pvt) Ltd - ELECTRICITY BILL', colSpan: 5, styles: {
              lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 }, fontStyle: 'bold', font: 'helvetica',
              fontSize: 14,
              minCellHeight: 7,
              cellPadding: { top: 1, bottom: 0 }
            }
          }
        ],
        [
          {
            content: 'NTN: 1418598-9 | STRN: 0702840006128',
            colSpan: 2,
            styles: {
              lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 },
              fontSize: 8,
              minCellHeight: 4,
              fontStyle: 'bold',
              cellPadding: { top: 0.5, bottom: 0.5 }

            }
          },
          {
            content: 'www.bahriatownservices.com',
            colSpan: 3,
            styles: {
              lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0 },
              fontSize: 8,
              minCellHeight: 4,
              fontStyle: 'bold',
              cellPadding: { top: 0.5, bottom: 0.5 }
            }
          }
        ],
        [
          { content: 'KuickPay Ref No', styles: { fontStyle: 'bold', minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: 'BILLING MONTH', styles: { fontStyle: 'bold', minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 }, fillColor: [210, 210, 210] } },
          { content: 'READING DATE', styles: { fontStyle: 'bold', minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: 'ISSUE DATE', styles: { fontStyle: 'bold', minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: 'DUE DATE', styles: { fontStyle: 'bold', minCellHeight: 3, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 }, fillColor: [210, 210, 210] } }
        ],
        [
          { content: '010003310003296', styles: { minCellHeight: 3.4, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: 'June 2025', styles: { minCellHeight: 3.4, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 }, fillColor: [210, 210, 210] } },
          { content: '24-Jun-2025', styles: { minCellHeight: 3.4, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '26-Jun-2025', styles: { minCellHeight: 3.4, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '09-Jul-2025', styles: { minCellHeight: 3.4, fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 }, fillColor: [210, 210, 210] } }
        ]
      ],
      theme: 'grid',
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: 'center'
      },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 40 },
        2: { cellWidth: 55 }
      }

    });
    //Body -1
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      head: [],
      body: [
        [
          { content: 'Route ID - UD', styles: { fontSize: 7, fontStyle: 'bold' } },
          { content: 'TARIFF', styles: { fontSize: 7, fontStyle: 'bold' } },
          { content: '', colSpan: 4, rowSpan: 4, styles: { fontSize: 8, minCellHeight: 45 } },
          { content: '', rowSpan: 11, styles: { cellWidth: 66.675 } }
        ],
        [
          { content: '01N0001900-193310003296', styles: { fontSize: 7 } },
          { content: 'A-1b(03)T', styles: { fontSize: 8 } }
        ],
        [
          { content: 'LOAD', styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: '15', styles: { fontSize: 8 } }
        ],
        [
          { content: 'CONN. DATE:', styles: { fontSize: 7, fontStyle: 'bold' } },
          { content: '10-Oct-2009', styles: { fontSize: 8 } }
        ],
        [
          { content: `    Zia-Ur-Rehman |\n    Plot No: 23, Street No: 9 , Phase: Safari I`, colSpan: 6, styles: { halign: 'left', cellPadding: { top: 0.5, bottom: 0.5 }, fontSize: 8.5, fontStyle: 'bold', fillColor: [210, 210, 210] } }
        ],
        [
          { content: 'METER No', styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'PREVIOUS', styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'PRESENT', styles: { fontSize: 8, fontStyle: 'bold', cellWidth: 20 } },
          { content: 'MF', styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'UNITS', styles: { fontSize: 8, fontStyle: 'bold', cellWidth: 20 } },
          { content: 'Status', styles: { fontSize: 8, fontStyle: 'bold', cellWidth: 20 } }
        ],
        [
          { content: '434820', styles: { fontSize: 8 } },
          { content: '15708\n276\n23951', styles: { fontSize: 8 } },
          { content: '16891\n6725\n25752', styles: { fontSize: 8 } },
          { content: '1', styles: { fontSize: 8 } },
          { content: '1183\n449\n1801', styles: { fontSize: 8 } },
          { content: '(OP) Import\n(P) Import\n(OP) Export', styles: { fontSize: 8 } }
        ],
        [
          { content: 'TOTAL UNITS CONSUMED', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'TOTAL COST OF ELECTRICITY', colSpan: 2, styles: { fontSize: 8, fontStyle: 'bold', cellPadding: 0 } },
          { content: 'Fixed Charges', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'ADV. PAYMENT', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'INCOME TAX WITH HELD', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
        ],
        [
          { content: '449', styles: { fontSize: 8 } },
          { content: '20784', colSpan: 2, styles: { fontSize: 8 } },
          { content: '1000', styles: { fontSize: 8 } },
          { content: '334', styles: { fontSize: 8 } },
          { content: '', styles: { fontSize: 8 } }
        ],
        [
          { content: 'E.D - 1.5 %', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'E.Tax ', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: 0 } },
          { content: 'INSTALLMENTS ', colSpan: 2, styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'SAS ', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
          { content: 'Tariff Adj', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5, right: 0.5, left: 0.5 } } },
        ],
        [
          { content: '297', styles: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '0', styles: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '', colSpan: 2, styles: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '0', styles: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '3143', styles: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 } } }
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
        1: { cellWidth: 20 }
      }

    });

    //Body -2
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      head: [],
      body: [
        [
          { content: 'PTV FEE', rowSpan: 3, styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'G.S.T', rowSpan: 3, styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'Qtr Adj/DMC', rowSpan: 3, styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'F. Tax', rowSpan: 3, styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: 'FC Surcharge', rowSpan: 3, styles: { fontSize: 8, fontStyle: 'bold' } },
          { content: ' CURRENT BILL' },
          { content: '31678 ' }
        ],
        [
          { content: ' ARREARS/AGE' },
          { content: '' }
        ],
        [
          { content: ' FUEL PRICE ADJUSTMENT ' },
          { content: '301 ' }
        ],
        [
          { content: '35', rowSpan: 3, styles: { fontSize: 8 } },
          { content: '4054', rowSpan: 3, styles: { fontSize: 8 } },
          { content: '-1006', rowSpan: 3, styles: { fontSize: 8 } },
          { content: '0', rowSpan: 3, styles: { fontSize: 8 } },
          { content: '1450', rowSpan: 3, styles: { fontSize: 8 } },
          { content: ' TOTAL ELECTRIC BILL' },
          { content: '31645 ' }
        ],
        [
          { content: ' Misc Charges of Common\n Services Area' },
          { content: '3125 ' }
        ],
        [
          { content: ' ARREARS Misc Charges', styles: { fontSize: 8 } },
          { content: '0 ' }
        ],
        [
          { content: 'Deffered Amount', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: 'Adv. Income Tax', styles: { fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5 } } },
          { content: '    BILL CALCULATION', colSpan: 3, styles: { fontSize: 8, fontStyle: 'bold', halign: 'left', lineWidth: { bottom: 0 } } },
          { content: ' AMOUNT DUE DATE' },
          { content: '34770 ' }
        ],
        [
          { content: '0', rowSpan: 2, styles: { fontSize: 8 } },
          { content: '1921', rowSpan: 2, styles: { fontSize: 8 } },
          { content: '          39.97    -    0    =    39.97    x    0', colSpan: 3, styles: { fontSize: 8, halign: 'left', lineWidth: { top: 0, bottom: 0 } } },
          { content: ' L.P. SURCHARGE' },
          { content: '2123 ' }
        ],
        [
          { content: '          46.29    -    0    =    46.29    x    449', colSpan: 3, styles: { fontSize: 8, halign: 'left', lineWidth: { top: 0, bottom: 0.1 } } },
          { content: ' AMOUNT AFTER DATE' },
          { content: '36893 ' }
        ],
        [
          { content: 'BAHRIA TOWN (Pvt) Ltd - ELECTRICITY BILL-(BANK COPY)', colSpan: 7, styles: { fontSize: 8, cellPadding: { top: 0.5, }, fontStyle: 'bold', lineWidth: { bottom: 0, top: 0.1, left: 0.1, right: 0.1 } } }
        ],
        [
          { content: '', colSpan: 7, styles: { fontSize: 8, cellPadding: 0, minCellHeight: 9, lineWidth: { top: 0, bottom: 0, left: 0.1, right: 0.1 } } }
        ],
        [
          { content: '* J u n 2 5 - 3 3 1 0 0 0 3 2 9 6 E - 0 7 / 0 9 / 2 0 2 5 - 3 4 7 7 0 - 3 6 8 9 3 *', colSpan: 7, styles: { fontSize: 6, cellPadding: 0, font: "Courier", lineWidth: { top: 0, left: 0.1, right: 0.1, bottom: 0.1 } } }
        ],
        [
          { content: 'INSTRUCTIONS ', colSpan: 7, styles: { fontStyle: 'bolditalic', cellPadding: { top: 0.5, bottom: 0.1 }, fontSize: 9 } }
        ],
        [
          { content: '', colSpan: 7, styles: { minCellHeight: 89 } }
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
        2: { cellWidth: 35, cellPadding: 0 },
        3: { cellWidth: 20 },
        4: { cellWidth: 20 },
        5: { cellWidth: 45, halign: 'left', fontSize: 8, fontStyle: 'bold', cellPadding: { top: 0.5, bottom: 0.5 } },
        6: { fontSize: 8, cellPadding: { top: 0.5, bottom: 0.5 }, halign: 'right' }
      }

    });

    autoTable(doc, {
      startY: 34.5,
      margin: { left: 54, right: 50 },
      head: [],
      body: [
        [{ content: 'KuickPay Ref No 010003310003296', styles: { fontStyle: 'bold' } }],
        [{ content: '1Bill Ref No 100047010003310003296', styles: { fontStyle: 'bold' } }],
        [{ content: '1. Online Payment Without Any Charges', styles: { fontStyle: 'bold' } }],
        [{ content: 'All Banking Apps/ Easypaisa /Jazzcash Using KuickPay' }],
        [{ content: '/ 1Bill Ref No' }],
        [{ content: '2. Cash Payment', styles: { fontStyle: 'bold' } }],
        [{ content: 'Bank Islami All Over Pakistan' }],
        [{ content: 'Bank Al Habib Ph 1 - 6' }],
        [{ content: 'Allied/Allied Islamic Ph 1 - 6' }],
        [{ content: 'UBL MCA : 219021184' }],
        [{ content: 'JS Bank Ph4' }],
        [{ content: '3. All KuickPay /1Bill Member Branches will also', styles: { fontStyle: 'bold' } }],
        [{ content: 'collect Bills', styles: { fontStyle: 'bold' } }]
      ],
      theme: 'plain',
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: 'center',
        valign: 'middle',
        cellPadding: { top: 0, bottom: 0 },
        fontSize: 8.5,
        cellWidth: 75
      }
    });

    //Side Table
    autoTable(doc, {
      startY: 36,
      margin: { left: 133, right: 15 },
      head: [],
      body: [
        [{ content: "MONTH", colSpan: 2, styles: { lineWidth: 0.1, fontStyle: 'bold' } }, { content: "UNITS", styles: { lineWidth: 0.1, fontStyle: 'bold' } }, { content: "BILL", styles: { lineWidth: 0.1, fontStyle: 'bold' } }, { content: "PAYMENT", styles: { lineWidth: 0.1, fontStyle: 'bold' } }],
        [{ content: "Jan" }, { content: "2025" }, { content: "2173" }, { content: "124949" }, { content: "124949" }],
        [{ content: "Feb" }, { content: "2025" }, { content: "1513" }, { content: "61932" }, { content: "61932" }],
        [{ content: "Mar" }, { content: "2025" }, { content: "1076" }, { content: "19880" }, { content: "19880" }],
        [{ content: "April" }, { content: "2025" }, { content: "704" }, { content: "3125" }, { content: "3125" }],
        [{ content: "May" }, { content: "2025" }, { content: "1310" }, { content: "3125" }, { content: "3125" }],
        [{ content: "June" }, { content: "2024" }, { content: "1511" }, { content: "34047" }, { content: "34047" }],
        [{ content: "July" }, { content: "2024" }, { content: "1421" }, { content: "4534" }, { content: "4534" }],
        [{ content: "Aug" }, { content: "2024" }, { content: "1507" }, { content: "91290" }, { content: "91290" }],
        [{ content: "Sep" }, { content: "2024" }, { content: "1093" }, { content: "34682" }, { content: "34682" }],
        [{ content: "Oct" }, { content: "2024" }, { content: "731" }, { content: "15218" }, { content: "15218" }],
        [{ content: "Nov" }, { content: "2024" }, { content: "667" }, { content: "23551" }, { content: "23551" }],
        [{ content: "Dec" }, { content: "2024" }, { content: "1601" }, { content: "85918" }, { content: "85918" }],
        [{ content: 'FPA April-25@0.9306 / KWH\nFCA June-25@-0.9000 / KWH', colSpan: 5, styles: { fontStyle: 'bold', minCellHeight: 10, fontSize: 10, overflow: 'visible' } }],
        [{ content: 'Misc Service Charges include Electricity\nConsumption of Street Lights ,Park,Tube\nWells/Turbine,Mosque and Filter Plants.', colSpan: 5, styles: { fontStyle: 'bold', minCellHeight: 18, fontSize: 9, overflow: 'visible' } }],

      ],
      theme: "plain",
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: "center",
        valign: "middle",
        cellPadding: 0,
        fontSize: 7.5,
        minCellHeight: 5
      },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 10 },
        2: { cellWidth: 12 },
        3: { cellWidth: 12 },
        4: { cellWidth: 15 },
      },
    });

    //INSTRUCTIONS -1
    autoTable(doc, {
      startY: 198,
      margin: { left: 18, right: 15 },
      head: [],
      body: [
        [
          { content: '' },
          { content: 'Off Peak', styles: { fontStyle: 'bold' } },
          { content: 'Peak', styles: { fontStyle: 'bold' } }
        ],
        [
          { content: 'Export ( KWH)', styles: { fontStyle: 'bold' } },
          { content: '1441' },
          { content: '0' }
        ],
        [
          { content: 'Import (KWH)', styles: { fontStyle: 'bold' } },
          { content: '1183' },
          { content: '449' }
        ],
        [
          { content: 'Net (KWH)', styles: { fontStyle: 'bold' } },
          { content: '258' },
          { content: '449' }
        ],
        [
          { content: '', colSpan: 3 }
        ],
        [
          { content: 'Month Count', styles: { fontStyle: 'bold' } },
          { content: '2/3', styles: { fontStyle: 'bold' } },
          { content: '' }
        ],
        [
          { content: '' },
          { content: 'Previous', styles: { fontStyle: 'bold' } },
          { content: 'Present', styles: { fontStyle: 'bold' } }
        ],
        [
          { content: 'Remain KWH (OP)' },
          { content: '406' },
          { content: '258' }
        ],
        [
          { content: 'Remain KWH (P)' },
          { content: '0' },
          { content: '0' }
        ],
        [
          { content: 'Credit Units' },
          { content: '5732', colSpan: 2 }
        ],
        [
          { content: '------------------- CUT HERE -----------------------', colSpan: 3 }
        ]
      ],
      theme: 'grid',
      bodyStyles: {
        fontSize: 8,
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: 'center',
        valign: 'middle'
      },
      columnStyles: {
        0: { cellPadding: { top: 0.5, bottom: 0.5 }, cellWidth: 26 },
        1: { cellPadding: { top: 0.5, bottom: 0.5 }, cellWidth: 25 },
        2: { cellPadding: { top: 0.5, bottom: 0.5 }, cellWidth: 25 }
      }

    });
    //INSTRUCTIONS -2
    autoTable(doc, {
      // startY: 195,
      margin: { left: 18, right: 70 },
      startY: doc.lastAutoTable.finalY,
      head: [],
      body: [
        [
          { content: 'BAHRIA TOWN (Pvt) Ltd. ELECTRICITY BILL (Bank Copy)', colSpan: 2, styles: { halign: 'center', fontStyle: 'bold', fontSize: 7 } }
        ],
        [
          { content: 'Billing Month' },
          { content: 'June 2025' }
        ],
        [
          { content: 'Due Date' },
          { content: '07/09/2025' }
        ],
        [
          { content: 'Meter # :' },
          { content: '434820' }
        ],
        [
          { content: 'KuickPay Ref No' },
          { content: '010003310003296' }
        ],
        [
          { content: 'Plot / Street / Phase :' },
          { content: '23 / 9 / Safari I' }
        ],
        [
          { content: 'PAYMENT WITHIN DUE DATE :' },
          { content: '34770' }
        ],
        [
          { content: 'PAYMENT AFTER DUE DATE :' },
          { content: '36893' }
        ]

      ],
      theme: 'grid',
      bodyStyles: {
        fontSize: 7.9,
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: 'center',
        valign: 'middle'
      },
      columnStyles: {
        0: { cellPadding: { top: 0.5, bottom: 0.5 }, cellWidth: 43, fontStyle: 'bold' },
        1: { cellPadding: { top: 0.5, bottom: 0.5 }, cellWidth: 33 }
      }

    });

    return doc;
  };

 
  const generatePDF = async () => {
    setLoading(true);
    try {
      // buildPDF ko bina kisi data ke call kar rahe hain
      const doc = buildPDF();

      // Default filename use kar rahe hain
      const fileName = "Electricity_Bill.pdf";

      doc.save(fileName);
    } catch (error) {
      console.error('Download Error:', error);
      alert(`❌ Failed to download PDF:\n${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const viewPDF = async () => {
    setLoading(true);
    try {
      // buildPDF ko bina kisi data ke call kar rahe hain
      const doc = buildPDF();

      const blob = doc.output('blob');
      const blobUrl = URL.createObjectURL(blob);

      const newTab = window.open();
      if (!newTab) {
        throw new Error('Popup blocked! Please allow popups for this site.');
      }

      newTab.document.write(`
      <html>
        <head><title>Electricity_Bill</title></head>
        <body style="margin:0">
          <embed width="100%" height="100%" src="${blobUrl}" type="application/pdf"/>
        </body>
      </html>
    `);
      newTab.document.close();
    } catch (error) {
      console.error('PDF Preview Error:', error);
      alert(`❌ Failed to preview bill:\n${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const buildImagePreview = () => {
    const doc = buildPDF();
    const pdfBlob = doc.output("blob");

    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;

      const imgData = canvas.toDataURL("image/png");
      setImageSrc(imgData); // ✅ sirf yahan image show hoga
    };
    reader.readAsArrayBuffer(pdfBlob);
};



  return (

    <div className="container">
      <h2 className="title">Lahore Electricity Bill Generator</h2>

      {/* Button Group */}
      <div className="button-group">
        <button onClick={generatePDF} disabled={loading} className="btn btn-download">
          {loading ? "Generating..." : "Download Bill PDF"}
        </button>
        <button onClick={viewPDF} disabled={loading} className="btn btn-view">
          {loading ? "Generating..." : "View Bill PDF"}
        </button>
        <button onClick={buildImagePreview} className="btn btn-generate">
          {loading ? "Generating..." : "View Bill Image"}
        </button>
      </div>


      {/* PDF Preview */}
      {imageSrc && (
        <div className="preview">
          <img
            src={imageSrc}
            alt="PDF Preview"
            style={{ width: "100%", maxWidth: "850px", marginTop: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>

  );
};

export default ElecBillGenerator;
