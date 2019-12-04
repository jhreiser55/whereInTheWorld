import Header from './Header'

const layoutStyle = {
  textAlign: "Center",
  //margin: 20,
  padding: 20,
  border: '4px solid #AAA',
  background: "gray",
  color: "black",
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