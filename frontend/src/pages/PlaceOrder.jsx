
import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/Razorpay.jpg'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function PlaceOrder() {
  let [method, setMethod] = useState('cod')
  let navigate = useNavigate()
  const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext)
  let { serverUrl } = useContext(authDataContext)
  let [loading, setLoading] = useState(false)

  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        const { data } = await axios.post(serverUrl + '/api/order/verifyrazorpay', response, { withCredentials: true })
        if (data) {
          navigate("/order")
          setCartItem({})
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
        case 'cod':
          const result = await axios.post(serverUrl + "/api/order/placeorder", orderData, { withCredentials: true })
          if (result.data) {
            setCartItem({})
            toast.success("Order Placed")
            navigate("/order")
            setLoading(false)
          } else {
            toast.error("Order Placement Error")
            setLoading(false)
          }
          break
        case 'razorpay':
          const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay", orderData, { withCredentials: true })
          if (resultRazorpay.data) {
            initPay(resultRazorpay.data)
            toast.success("Order Placed")
            setLoading(false)
          }
          break
        default:
          break
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center flex-col md:flex-row gap-12 px-6 py-10'>
      
      {/* Form Section */}
      <div className='lg:w-1/2 w-full flex items-center justify-center'>
        <form onSubmit={onSubmitHandler} className='w-full lg:w-3/4 bg-gray-900/80 backdrop-blur-xl shadow-lg rounded-2xl p-8'>
          <div className='mb-6'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>

          <div className='flex gap-4 mb-4'>
            <input type="text" placeholder='First name'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='firstName' value={formData.firstName} />
            <input type="text" placeholder='Last name'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='lastName' value={formData.lastName} />
          </div>

          <input type="email" placeholder='Email address'
            className='w-full px-4 py-3 mb-4 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
            required onChange={onChangeHandler} name='email' value={formData.email} />

          <input type="text" placeholder='Street'
            className='w-full px-4 py-3 mb-4 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
            required onChange={onChangeHandler} name='street' value={formData.street} />

          <div className='flex gap-4 mb-4'>
            <input type="text" placeholder='City'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='city' value={formData.city} />
            <input type="text" placeholder='State'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='state' value={formData.state} />
          </div>

          <div className='flex gap-4 mb-4'>
            <input type="text" placeholder='Pincode'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='pinCode' value={formData.pinCode} />
            <input type="text" placeholder='Country'
              className='w-1/2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
              required onChange={onChangeHandler} name='country' value={formData.country} />
          </div>

          <input type="text" placeholder='Phone'
            className='w-full px-4 py-3 mb-6 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
            required onChange={onChangeHandler} name='phone' value={formData.phone} />

          <div className='flex justify-end'>
            <button type='submit' className='bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 transition text-white font-semibold py-3 px-8 rounded-full shadow-md'>
              {loading ? <Loading /> : "PLACE ORDER"}
            </button>
          </div>
        </form>
      </div>

      {/* Cart & Payment Section */}
      <div className='lg:w-1/2 w-full flex items-center justify-center'>
        <div className='w-full lg:w-3/4 flex flex-col items-center gap-6 bg-gray-900/80 backdrop-blur-xl shadow-lg rounded-2xl p-8'>
          <CartTotal />
          <div className='mb-4'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>
          <div className='flex gap-6'>
            <button onClick={() => setMethod('razorpay')} className={`w-40 h-16 rounded-lg overflow-hidden border-2 ${method === 'razorpay' ? 'border-yellow-400 shadow-md' : 'border-gray-700'}`}>
              <img src={razorpay} className='w-full h-full object-contain bg-white rounded-md' alt="razorpay" />
            </button>
            <button onClick={() => setMethod('cod')} className={`w-48 h-16 rounded-lg font-bold text-white text-sm transition ${method === 'cod' ? 'border-2 border-yellow-400' : 'border-2 border-gray-700'} bg-gradient-to-r from-indigo-600 to-blue-500`}>
              CASH ON DELIVERY
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
// import React, { useContext, useState } from 'react'
// import Title from '../component/Title'
// import CartTotal from '../component/CartTotal'
// import razorpay from '../assets/Razorpay.jpg'
// import { shopDataContext } from '../context/ShopContext'
// import { authDataContext } from '../context/authContext'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import Loading from '../component/Loading'

// function PlaceOrder() {
//   let [method, setMethod] = useState('cod')
//   let navigate = useNavigate()
//   const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext)
//   let { serverUrl } = useContext(authDataContext)
//   let [loading, setLoading] = useState(false)

//   let [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     country: '',
//     phone: ''
//   })

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(data => ({ ...data, [name]: value }))
//   }

//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'Order Payment',
//       description: 'Order Payment',
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         const { data } = await axios.post(serverUrl + '/api/order/verifyrazorpay', response, { withCredentials: true })
//         if (data) {
//           navigate("/order")
//           setCartItem({})
//         }
//       }
//     }
//     const rzp = new window.Razorpay(options)
//     rzp.open()
//   }

//   const onSubmitHandler = async (e) => {
//     setLoading(true)
//     e.preventDefault()
//     try {
//       let orderItems = []
//       for (const items in cartItem) {
//         for (const item in cartItem[items]) {
//           if (cartItem[items][item] > 0) {
//             const itemInfo = structuredClone(products.find(product => product._id === items))
//             if (itemInfo) {
//               itemInfo.size = item
//               itemInfo.quantity = cartItem[items][item]
//               orderItems.push(itemInfo)
//             }
//           }
//         }
//       }
//       let orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       }
//       switch (method) {
//         case 'cod':
//           const result = await axios.post(serverUrl + "/api/order/placeorder", orderData, { withCredentials: true })
//           if (result.data) {
//             setCartItem({})
//             toast.success("Order Placed")
//             navigate("/order")
//             setLoading(false)
//           } else {
//             toast.error("Order Placement Error")
//             setLoading(false)
//           }
//           break
//         case 'razorpay':
//           const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay", orderData, { withCredentials: true })
//           if (resultRazorpay.data) {
//             initPay(resultRazorpay.data)
//             toast.success("Order Placed")
//             setLoading(false)
//           }
//           break
//         default:
//           break
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const inputClass = "w-full h-[50px] rounded-full border border-gray-700 bg-gray-800 placeholder:text-gray-400 text-gray-100 px-[20px] focus:ring-2 focus:ring-pink-500"

//   return (
//     <div className='w-[100vw] min-h-[100vh] bg-gray-900 flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>

//       {/* Form Section */}
//       <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
//         <form onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] flex flex-col gap-4'>
//           <div className='py-[10px]'>
//             <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//           </div>

//           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] gap-2'>
//             <input type="text" placeholder='First name' required name='firstName' value={formData.firstName} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//             <input type="text" placeholder='Last name' required name='lastName' value={formData.lastName} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//           </div>

//           <input type="email" placeholder='Email address' required name='email' value={formData.email} onChange={onChangeHandler} className={inputClass} />
//           <input type="text" placeholder='Street' required name='street' value={formData.street} onChange={onChangeHandler} className={inputClass} />

//           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] gap-2'>
//             <input type="text" placeholder='City' required name='city' value={formData.city} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//             <input type="text" placeholder='State' required name='state' value={formData.state} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//           </div>

//           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] gap-2'>
//             <input type="text" placeholder='Pincode' required name='pinCode' value={formData.pinCode} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//             <input type="text" placeholder='Country' required name='country' value={formData.country} onChange={onChangeHandler} className={`${inputClass} w-1/2`} />
//           </div>

//           <input type="text" placeholder='Phone' required name='phone' value={formData.phone} onChange={onChangeHandler} className={inputClass} />

//           <div>
//             <button type='submit' className='text-[18px] active:bg-pink-600 cursor-pointer bg-pink-500 py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%]' >
//               {loading ? <Loading /> : "PLACE ORDER"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Cart & Payment Section */}
//       <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
//         <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col'>
//           <CartTotal />
//           <div className='py-[10px]'>
//             <Title text1={'PAYMENT'} text2={'METHOD'} />
//           </div>
//           <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]'>
//             <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-pink-500 rounded-sm' : ''}`}>
//               <img src={razorpay} className='w-[100%] h-[100%] object-fill rounded-sm' alt="" />
//             </button>
//             <button onClick={() => setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#ec4899] to-[#f9a8d4] text-[14px] px-[20px] rounded-sm text-white font-bold ${method === 'cod' ? 'border-[5px] border-pink-700 rounded-sm' : ''}`}>
//               CASH ON DELIVERY
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default PlaceOrder
