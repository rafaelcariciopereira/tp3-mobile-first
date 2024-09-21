
export default function TextoEstilo() {
  const estiloTexto = {
    backgroundColor: '#f0f0f0',  
    color: '#333',               
    padding: '20px',             
    fontFamily: 'Arial, sans-serif',  
    fontSize: '18px',            
    borderRadius: '8px',         
    textAlign: 'center'          
  };
  return (
    <>
      <h1 className="title">Hello World</h1>
      <p style={estiloTexto}>
      Este é um texto estilizado usando inline styles em React.
      </p>
    </>
  );
}

