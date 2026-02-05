
const CommerceDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
        <p className="text-gray-500 mb-8">Disclosure Based on the Specified Commercial Transactions Act</p>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {/* 販売業者名 / Business Name */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top w-1/3">
                  販売業者名
                </td>
                <td className="py-4 text-gray-600">
                  Meg（請求があれば遅滞なく開示いたします）
                </td>
              </tr>
              
              {/* 運営責任者 / Operation Manager */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  運営責任者
                </td>
                <td className="py-4 text-gray-600">
                  Meg
                </td>
              </tr>
              
              {/* 所在地 / Address */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  所在地
                </td>
                <td className="py-4 text-gray-600">
                  請求があれば遅滞なく開示いたします
                </td>
              </tr>
              
              {/* 電話番号 / Phone Number */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  電話番号
                </td>
                <td className="py-4 text-gray-600">
                  請求があれば遅滞なく開示いたします
                </td>
              </tr>
              
              {/* メールアドレス / Email Address */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  メールアドレス
                </td>
                <td className="py-4 text-gray-600">
                  japaneezi@gmail.com
                </td>
              </tr>
              
              {/* 販売価格 / Price */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  販売価格
                </td>
                <td className="py-4 text-gray-600">
                  各サービスページに記載（税込）<br />
                  ・体験レッスン（30分）：25ドル<br />
                  ・単発レッスン（50分）：40ドル<br />
                  ・3回パック（50分×3回）：110ドル<br />
                  ・5回パック（50分×5回）：175ドル
                </td>
              </tr>
              
              {/* 追加手数料 / Additional Fees */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  商品代金以外の必要料金
                </td>
                <td className="py-4 text-gray-600">
                  なし
                </td>
              </tr>
              
              {/* 支払方法 / Payment Methods */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  お支払い方法
                </td>
                <td className="py-4 text-gray-600">
                  クレジットカード（Visa、Mastercard、American Express、JCB）
                </td>
              </tr>
              
              {/* 支払時期 / Payment Period */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  お支払い時期
                </td>
                <td className="py-4 text-gray-600">
                  ご注文時に即時決済
                </td>
              </tr>
              
              {/* サービス提供時期 / Delivery Time */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  サービス提供時期
                </td>
                <td className="py-4 text-gray-600">
                  ご予約いただいた日時にオンライン（Google Meet）にてレッスンを提供いたします。ご予約確定後、メールにてミーティングリンクをお送りします。
                </td>
              </tr>
              
              {/* 返品・交換について / Exchange and Return Policy */}
              <tr>
                <td className="py-4 pr-4 font-medium text-gray-900 align-top">
                  返品・キャンセルについて
                </td>
                <td className="py-4 text-gray-600">
                  <p className="mb-3">
                    <strong>＜お客様都合によるキャンセル＞</strong><br />
                    レッスン開始24時間前までのキャンセル：無料で振替可能です。<br />
                    レッスン開始24時間以内のキャンセル：返金不可となりますが、講師の判断により振替対応する場合があります。
                  </p>
                  <p>
                    <strong>＜サービス提供に問題があった場合＞</strong><br />
                    技術的な問題等によりレッスンが実施できなかった場合は、すぐにメール（japaneezi@gmail.com）までご連絡ください。追加費用なしで振替対応いたします。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 text-center">
          最終更新日：2026年2月
        </p>
      </div>
    </div>
  )
}

export default CommerceDisclosure
