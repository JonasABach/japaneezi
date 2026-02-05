import { Link } from 'react-router-dom'

const CommerceDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
        <p className="text-gray-500 mb-8">Commerce Disclosure</p>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top w-1/3">
                  販売業者名<br />
                  <span className="text-gray-500 text-sm font-normal">Business Name</span>
                </td>
                <td className="py-4 text-gray-600">
                  Japaneezi
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  運営責任者<br />
                  <span className="text-gray-500 text-sm font-normal">Head of Operations</span>
                </td>
                <td className="py-4 text-gray-600">
                  Meg
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  所在地<br />
                  <span className="text-gray-500 text-sm font-normal">Address</span>
                </td>
                <td className="py-4 text-gray-600">
                  請求があれば遅滞なく開示します<br />
                  <span className="text-gray-500 text-sm">We will disclose this information promptly upon request.</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  電話番号<br />
                  <span className="text-gray-500 text-sm font-normal">Phone Number</span>
                </td>
                <td className="py-4 text-gray-600">
                  請求があれば遅滞なく開示します<br />
                  <span className="text-gray-500 text-sm">We will disclose this information promptly upon request.</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  メールアドレス<br />
                  <span className="text-gray-500 text-sm font-normal">Email Address</span>
                </td>
                <td className="py-4 text-gray-600">
                  <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">お問い合わせフォーム</Link>よりご連絡ください<br />
                  <span className="text-gray-500 text-sm">Please contact us via the <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">contact form</Link></span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  販売価格<br />
                  <span className="text-gray-500 text-sm font-normal">Prices</span>
                </td>
                <td className="py-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    <li>体験レッスン (30分): $25 USD</li>
                    <li>単発レッスン (50分): $40 USD</li>
                    <li>3回パック (50分×3回): $110 USD</li>
                    <li>5回パック (50分×5回): $175 USD</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">
                    価格はすべてUSD（米ドル）表記、税込みです。
                  </p>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  追加手数料<br />
                  <span className="text-gray-500 text-sm font-normal">Additional Fees</span>
                </td>
                <td className="py-4 text-gray-600">
                  なし。表示価格以外の費用は発生しません。<br />
                  <span className="text-gray-500 text-sm">None. No additional fees beyond the listed prices.</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  支払方法<br />
                  <span className="text-gray-500 text-sm font-normal">Payment Methods</span>
                </td>
                <td className="py-4 text-gray-600">
                  クレジットカード、デビットカード（Visa、Mastercard、American Express、JCB）<br />
                  <span className="text-gray-500 text-sm">Credit card, debit card (Visa, Mastercard, American Express, JCB)</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  支払時期<br />
                  <span className="text-gray-500 text-sm font-normal">Payment Period</span>
                </td>
                <td className="py-4 text-gray-600">
                  ご購入時に即時決済されます。<br />
                  <span className="text-gray-500 text-sm">Payment is processed immediately at the time of purchase.</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  サービス提供時期<br />
                  <span className="text-gray-500 text-sm font-normal">Service Delivery</span>
                </td>
                <td className="py-4 text-gray-600">
                  予約時に選択された日時にオンライン（Google Meet）でレッスンを提供します。予約確定後、ミーティングリンクをメールでお送りします。<br />
                  <span className="text-gray-500 text-sm">Lessons are delivered online via Google Meet at the scheduled date and time. A meeting link will be sent via email after booking confirmation.</span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  返品・キャンセルについて<br />
                  <span className="text-gray-500 text-sm font-normal">Cancellation & Refund Policy</span>
                </td>
                <td className="py-4 text-gray-600">
                  <p className="mb-2">
                    <strong>お客様都合のキャンセル：</strong>レッスン開始24時間前までのキャンセルは無料で振替可能です。24時間以内のキャンセルは返金不可ですが、講師の判断で振替対応する場合があります。
                  </p>
                  <p className="mb-2">
                    <strong>技術的問題：</strong>技術的な問題によりレッスンが実施できなかった場合は、すぐにご連絡ください。追加費用なしで振替対応いたします。
                  </p>
                  <p className="mt-2">
                    詳細は<Link to="/cancellation-policy" className="text-sakura-600 hover:text-sakura-700">キャンセルポリシー</Link>をご確認ください。
                  </p>
                  <p className="mt-2 text-gray-500 text-sm">
                    See our full <Link to="/cancellation-policy" className="text-sakura-600 hover:text-sakura-700">Cancellation Policy</Link> for details.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 text-center">
          最終更新日: 2026年2月
        </p>
      </div>
    </div>
  )
}

export default CommerceDisclosure
