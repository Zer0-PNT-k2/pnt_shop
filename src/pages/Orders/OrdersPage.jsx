import HeaderTop from '../../components/headers/header'
import HeaderBottom from '../../components/headers/navigation'
import Footer from '../../components/footer'

const OrdersPage = () => {
  return (
    <div>
      <HeaderTop />
      <div className="mx-auto max-w-screen-xl">
        <HeaderBottom />
      </div>
      <Footer />
    </div>
  )
}

export default OrdersPage
