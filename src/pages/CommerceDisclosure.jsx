import { Link } from 'react-router-dom'

const CommerceDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Commerce Disclosure</h1>
        <p className="text-gray-500 mb-8">特定商取引法に基づく表記</p>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top w-1/3">
                  Business Name<br />
                  <span className="text-gray-500 text-sm font-normal">販売業者名</span>
                </td>
                <td className="py-4 text-gray-600">
                  Japaneezi
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Location<br />
                  <span className="text-gray-500 text-sm font-normal">所在地</span>
                </td>
                <td className="py-4 text-gray-600">
                  Tokyo, Japan
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Phone Number<br />
                  <span className="text-gray-500 text-sm font-normal">電話番号</span>
                </td>
                <td className="py-4 text-gray-600">
                  Please use the <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">contact form</Link> on our website
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Email Address<br />
                  <span className="text-gray-500 text-sm font-normal">メールアドレス</span>
                </td>
                <td className="py-4 text-gray-600">
                  Please use the <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">contact form</Link> on our website
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Head of Operations<br />
                  <span className="text-gray-500 text-sm font-normal">運営責任者</span>
                </td>
                <td className="py-4 text-gray-600">
                  Meg Sensei
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Additional Fees<br />
                  <span className="text-gray-500 text-sm font-normal">追加手数料</span>
                </td>
                <td className="py-4 text-gray-600">
                  None. All prices shown are final and include all applicable fees.
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Exchanges & Returns Policy<br />
                  <span className="text-gray-500 text-sm font-normal">返品・交換について</span>
                </td>
                <td className="py-4 text-gray-600">
                  <p className="mb-2">
                    <strong>Cancellation by customer:</strong> Lessons cancelled at least 24 hours before 
                    the scheduled time can be rescheduled at no charge. Cancellations with less than 24 hours 
                    notice are non-refundable but may be rescheduled at the instructor's discretion.
                  </p>
                  <p>
                    <strong>Service issues:</strong> If you experience technical difficulties that prevent the 
                    lesson from taking place, please contact us immediately. We will reschedule the lesson 
                    at no additional cost.
                  </p>
                  <p className="mt-2">
                    See our full <Link to="/cancellation-policy" className="text-sakura-600 hover:text-sakura-700">Cancellation Policy</Link> for details.
                  </p>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Service Delivery<br />
                  <span className="text-gray-500 text-sm font-normal">サービス提供時期</span>
                </td>
                <td className="py-4 text-gray-600">
                  Lessons are delivered online via Google Meet at the scheduled date and time selected 
                  during booking. A meeting link will be sent via email after booking confirmation.
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Accepted Payment Methods<br />
                  <span className="text-gray-500 text-sm font-normal">支払方法</span>
                </td>
                <td className="py-4 text-gray-600">
                  Credit card, debit card (Visa, Mastercard, American Express, JCB)
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Payment Period<br />
                  <span className="text-gray-500 text-sm font-normal">支払時期</span>
                </td>
                <td className="py-4 text-gray-600">
                  Payment is processed immediately at the time of purchase.
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  Prices<br />
                  <span className="text-gray-500 text-sm font-normal">販売価格</span>
                </td>
                <td className="py-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Trial Lesson (30 min): $25 USD</li>
                    <li>Single Lesson (50 min): $40 USD</li>
                    <li>3-Lesson Pack (3 × 50 min): $110 USD</li>
                    <li>5-Lesson Pack (5 × 50 min): $175 USD</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">
                    All prices are in USD and include applicable taxes.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 text-center">
          Last updated: February 2026
        </p>
      </div>
    </div>
  )
}

export default CommerceDisclosure
