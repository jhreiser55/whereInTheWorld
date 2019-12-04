import Header from './Header'

const layoutStyle = {
  textAlign: "Center",
  //margin: 20,
  padding: 20,
  border: '4px solid #AAA',
  background: "linear-gradient(to bottom right, blue, black, red 80%)",
  color: "white",
  fontSize: "30px"
}


export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}