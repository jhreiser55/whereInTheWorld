import Header from './Header'

const layoutStyle2 = {
  textAlign: "Center",
  margin: 20,
  padding: 20,
  //border: '1px solid #DDD',
  background: "white",
  color: "black",
  fontSize: "25px"
}

export default function Layout2(props) {
  return (
    <div style={layoutStyle2}>
      <Header />
      {props.children}
    </div>
  )
}