
import jsPDF from 'jspdf'

const BuilPDF = () => {
const generatePDF = () => {
    var doc = new jsPDF('p', 'pt');
    
    doc.text('This is the first title.',20,20)
    doc.text('This is the second title.',20,40)
    doc.text('This is the thrid title.',20,60)      

    
    doc.save('demo.pdf')
  }  

  return (
        <div>
           <button onClick={generatePDF}>Download PDF</button> 
        </div>
  )
 
}

export default BuilPDF