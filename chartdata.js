
function createCellContent(_number,_obj) {
    if(_obj[_number]) return (_number+'').repeat(_obj[_number]);
    else return '';
}

function generateBirthChart(birthday) {
    let objNumber = countNumbers(birthday+'')
    let htmlTalbe = `
        <table id="bchart">
            <caption>Biểu đồ ngày sinh</caption>
            <tr>
                <td>${createCellContent(7,objNumber)}</td>
                <td>${createCellContent(8,objNumber)}</td>
                <td>${createCellContent(9,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(4,objNumber)}</td>
                <td>${createCellContent(5,objNumber)}</td>
                <td>${createCellContent(6,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(1,objNumber)}</td>
                <td>${createCellContent(2,objNumber)}</td>
                <td>${createCellContent(3,objNumber)}</td>
            </tr>
        </table>
    `;
    return htmlTalbe;
}

function generatePowerMeaning(birthday) {
    let objNumber = countNumbers(birthday+'')
    let htmlData = "";
    console.log(Object.keys(objNumber))
    for(var _num of Object.keys(objNumber))
        switch(_num*1) {
            case 1:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Số 1 trong biểu đồ ngày sinh là con số đại diện cho thể chất (Physical). Đây là con số duy nhất. Nó diễn đạt cho sự thiêng liêng của bản thân và cái tôi cá nhân. Đồng thời nó cũng thể hiện sự đặc biệt và tiềm năng đứng đầu của người có con số này. Số 1 cũng là chìa khóa dẫn đến các kỹ năng liên lạc thông tin hay giao tiếp của người sở hữu nó.</dd>`;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 2:
            htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Con số 2 là người có tính tinh thần (spiritual). Đây là con số đại diện cho hai mặt của cảm xúc. Sẽ có lúc người này cảm thấy tích cực và vô cùng vui tươi. Nhưng cũng sẽ có lúc họ dễ bị rơi vào những tiêu cực. Ngoài ra, số 2 cũng biểu trưng cho hai mặt tính cách – bên trong và bên ngoài. Bên trong, người có thể rất yếu đuối nhưng bên ngoài họ có thể lại thể hiện mình là người vô cùng mạnh mẽ và độc lập. Chính vì sự đối lập rõ rệt này mà những người xung quanh khó có khả năng thấu hiểu và nắm bắt được tâm tư thực sự của người có số 2.</dd>
                <dd>Người có con số 2 trong biểu đồ ngày sinh còn là người vô cùng sâu sắc và tinh tế. Họ có khả năng nhìn nhận và thấu hiểu vấn đề từ gốc rễ. Từ đó cách giải quyết và đối mặt với chúng cũng khách quan và sáng suốt hơn hẳn. Ngoài ra, người này còn có trực giác vô cùng nhạy bén. Nhờ sự nhạy bén này mà họ dễ dàng chú ý và quan sát được các chi tiết, tình tiết nhỏ nhất của mọi sự vật, sự việc và con người xung quanh. Nhờ vậy, họ sẽ khó bị mắc lừa hay bị người khác qua mặt.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 3:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Số 3 là đại diện cho tâm trí (mind), thể chất (verbal) và trực giác (intuition). Đây cũng là các từ khóa cơ bản của con số này. Người có con số 3 trong biểu đồ ngày sinh chính là người vô cùng nhạy bén và lý trí. Họ luôn nhìn nhận và đánh giá các sự việc, sự kiện xung quanh theo cách khách quan nhất. Người này cũng rất công bằng. Họ sẽ không thiện vị bất kỳ ai. Dù người đó có quan trọng đến như nào. Người có con số 3 thường hướng đến sự công bằng (fair) cho tất cả mọi người.</dd>
                <dd>Ngoài ra, người có con số 3 cũng rất giỏi ghi nhớ. Họ có sức mạnh về khả năng ghi nhớ và tập trung tuyệt đối của trí não. Vì vậy, trong học hành cũng như công việc, người này thường có xu hướng ghi nhớ tốt hơn so với bạn học hay đồng nghiệp.</dd>
                <dd>Nhìn chung, người có con số 3 là người đạt được sự cân bằng và kết nối giữa tam giác tâm trí – tinh thần – thể chất. Nhờ vậy mà người sở hữu con số này thường đạt được nhiều thành tích trong học tập và thành công trong sự nghiệp. Họ cũng rất tài năng và luôn có mục tiêu để hướng đến.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 4:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Người có con số 4 là người thuộc về các hoạt động thể chất. Con số 4 cũng nằm trong trục thể chất (1-4-7) của biểu đồ ngày sinh. Đây là con số thể hiện sự kỷ cương, thứ tự và sự thực tế. Họ rất quy củ và luôn làm việc bằng sự tận tâm của mình. Nhờ vậy mà số 4 trong biểu đồ ngày sinh luôn hoàn thành tốt, thậm chí trước thời hạn (deadline) công việc. Do đó, dù ở cương vị nhân viên hay nhà lãnh đạo, họ cũng luôn là tấm gương tuyệt vời cho người khác học hỏi.</dd>
                <dd>Ngoài ra, hình dáng của con số 4 cũng là hình vuông – nó thể hiện sự chín chắn và toàn diện. Người có con số này cũng rất thực tế và rõ ràng. Họ làm việc và giải quyết các vấn đề theo sự quy tắc và minh bạch, Nhờ vậy mà khi hợp tác với người này, ta có thể yên tâm về độ uy tín và quy trình làm việc rõ ràng của họ.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 5:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Số 5 trong biểu đồ ngày sinh là con số nằm giữa trục ngang về tinh thần. Vì vậy, họ có khả năng và sức mạnh tiềm ẩn vô cùng to lớn về mặt cảm xúc. Nhờ có con số 5 trong biểu đồ ngày sinh, người này có khả năng cảm nhận và trí tuệ tinh thần vô cùng tuyệt vời. Nhờ đó, người này có thể trở thành chỗ dựa tinh thần cũng như cố vấn cho mọi người. Đó chính là lý do họ luôn được yêu quý và dễ dàng trở thành người bạn tuyệt vời đối với mọi đối tượng.</dd>
                <dd>Cũng nhờ sức mạnh về tinh thần vô cùng to lớn, người này có khả năng diễn đạt và thể hiện tình yêu thương và sự ấm áp của mình với tất cả mọi người. Họ giống như mặt trời ấm áp và đem tới sự dễ chịu cho bất kỳ ai có cơ hội tiếp xúc. Ngoài ra, người có con số 5 trong biểu đồ ngày sinh cũng có thể diễn đạt và khả năng nói chuyện rất tuyệt vời. Họ có thể phô bày những cảm xúc, suy nghĩ của mình mà không hề bị ngắc ngứ hay ngượng ngùng. Nhờ vậy, người này dễ dàng trao đi những cảm xúc và sự ấm áp của mình cho người cần nó.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 6:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Người có con số 6 trong biểu đồ ngày sinh sẽ có ưu thế về trí tuệ. Bởi con số 6 thuộc trục trí tuệ trong biểu đồ. Vì vậy, họ có thể làm rất tốt các công việc liên quan đến trí óc. Các công việc đòi hỏi sự nhanh nhạy và khả năng giải quyết tình huống tốt sẽ giúp họ phát huy tối đa sức mạnh của mình.</dd>
                <dd>Người có con số 6 trong biểu đồ ngày sinh cũng là người vô cùng may mắn khi họ có thể kết hợp cả hai bán cầu não. Nhờ vậy, các công việc, cũng như cách họ giải quyết tình huống trở nên tốt và linh hoạt hơn nhiều. Họ cũng sẽ có nhiều khả năng để tiếp cận các loại hình kiến thức khác nhau. Người này có thể vừa giỏi văn cũng vừa giỏi toán. Họ có thể là nhà soạn nhạc tuyệt vời nhưng cũng có thể trở thành kỹ sư thành thạo. Nhất là các công việc liên quan đến hình khối và xây dựng như kiến trúc sư, người có con số 6 trong biểu đồ ngày sinh sẽ tận dụng được tối đa ưu điểm của mình.</dd>
                <dd>Tuy nhiên, người có số 6 trong biểu đồ ngày sinh cũng dễ gặp các vấn đề liên quan đến cảm xúc. Biểu hiện của sự rối loạn về cảm xúc khi xảy ra ở người này sẽ nặng hơn hẳn những người khác. Đó chính là lý do khiến họ dễ bị stress, lo âu hay bị bồn chồn. Đôi khi, các biểu hiện này có thể bị nặng và trầm trọng hơn như chứng bệnh trầm cảm.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 7:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Người có con số 7 trong biểu đồ ngày sinh sẽ có thiên hướng mang năng lượng của cơ thể. Số 7 là đại diện cho các luân xa – trung tâm năng lượng của cơ thể người. Đây là các trục, bánh xe điều khiển và luân chuyển nguồn năng lượng sống của cơ thể. Nếu một trong số các luân xa yếu đi hoặc mất khả năng hoạt động, cơ thể con người sẽ gặp các vấn đề. Một trong số các lý do khiến những luân xa này yếu đi có thể do tuổi tác, tai nạn hoặc sự lười biếng, ít vận động và chế độ ăn uống thiếu lành mạnh. Do vậy, để có thể điều hòa và khai mở các luân xa, cần chú ý điều hòa năng lượng cơ thể. Chế độ ăn uống và sinh hoạt cũng sẽ tác động vô cùng lớn đến chúng.</dd>
                <dd>Số 7 đại diện cho các luân xa, vì vậy người có con số này có khả năng khai mở và đánh thức sự hoạt động của toàn bộ luân xa. Ngoài ra, họ cũng có thể tận dụng khả năng để phát triển cơ thể, thân – tâm – trí một cách toàn diện và tối ưu nhất.</dd>
                <dd>Ngoài ra, con số 7 cũng đại diện cho sự trải nghiệm và khám phá cuộc sống. Nhờ việc khám phá này, người ta mới có thể làm tốt hoạt động của bản thân cũng như hiểu được cần phải làm gì để hoàn thiện chính mình. Chỉ khi trải qua các biến động, bài học và thử thách của cuộc sống, người có con số 7 mới trở nên toàn diện và tốt đẹp hơn. Đồng thời, khi đó, các sức mạnh, năng lượng tiềm ẩn của họ mới được khai phá và tận dụng.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 8:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Người có con số 8 trong biểu đồ ngày sinh thường rất năng động. Sự năng động tinh thần này thể hiện ở việc con số 8 là nằm ở vị trí đầu tiên của trục tinh thần (2-5-8). Đó cũng là lý do giúp họ có thể đạt được sự thông tuệ và am hiểu sâu sắc về mặt cảm xúc. Họ hiểu được cốt lõi và gốc rễ của tình yêu thương. Đồng thời người này cũng biết cách lan tỏa tới mọi người sự ấm áp mà tình yêu thương có. Nhờ vậy, mọi người luôn rất yêu quý và trân trọng mối quan hệ với họ.</dd>
                <dd>Ngoài ra, người có con số 8 cũng rất độc lập. Họ có khả năng tự chủ và tự lực từ rất sớm. Dù gia cảnh giàu hay nghèo, người này cũng đều có xu hướng tách riêng và độc lập từ suy nghĩ đến tài chính. Họ sẽ cố gắng và làm việc hết mình để có thể tự lo lắng cho bản thân. Vì vậy, nhờ tính độc lập của mình, người có con số 8 sẽ gặt hái được nhiều thành tựu ngay từ khi còn trẻ, sớm hơn hẳn so với bạn bè đồng trang lứa.</dd>`;
                htmlData = `<p>${htmlData}</p>`;
                break;
            case 9:
                htmlData += `<dl><h3>Bạn có ${objNumber[_num]??0} số ${_num} trong biểu đồ ngày sinh.</h3></dl>`;
                htmlData += `
                <dd>Người có con số 9 trong biểu đồ ngày sinh là đại diện cho trí óc trí tuệ. Đây là con số nằm trong trục trí óc (3-6-9) và trục quyết tâm (1-5-9). Vì vậy mà người này có khả năng và trí tuệ gấp 3 lần con số 3. Vì thế họ có khả năng học hỏi và làm việc rất nhanh. Họ chỉ cần mất một thời gian ngắn để có thể làm tốt những gì mà bản thân cần. Đây cũng là lý do khiến người này luôn làm tốt công việc được giao.</dd>
                <dd>Họ cũng đồng thời rất có trách nhiệm khi làm việc. Vì vậy, sẽ chẳng bao giờ xảy ra tình trạng trễ hay chậm thời hạn (deadline) công việc. Với người này, chỉ có tốt và tốt hơn khi làm việc. Nhất là khi hợp tác, kết hợp với người khác, người có số 9 luôn đặt chữ uy tín lên hàng đầu. Vì vậy mà đối tác, đồng nghiệp và lãnh đạo của họ luôn đề cao và cảm thấy hứng thú khi làm việc cùng.</dd>
                `;
                htmlData = `<p>${htmlData}</p>`;
                break;
                
        }
    return htmlData;
}
function generateNameMeaning(name,birthday) {
    let obj1 = countNumbers(birthday+'');
    let obj2 = countNumbers(convertNameToNumberString(name));

    let objNumber = compareAndSum(obj1,obj2);
    let htmlData = `
    <p>Con số trống (số khuyết) là con số không xuất hiện trong biểu đồ tên của bạn. Đó là con số nói lên điểm yếu và những thiếu sót mà bạn cần học tập thêm để có thể cân bằng được cuộc sống.</p>
    <p>Tuy nhiên, khi xét về các con số trống thì bạn cần kết hợp được cả biểu đồ tên và biểu đồ ngày sinh thần số học của mình. Bởi vì có thể con số trống trong biểu đồ tên lại xuất hiện trong biểu đồ ngày sinh và ngược lại, nếu như vậy thì nó đã được bổ sung cho nhau.</p>
    `;
    for(var i = 1; i < 10; i++)
        if(Object.keys(objNumber).indexOf(i)<=0)
            switch(i) {
                case 1:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần học cách độc lập và tự chủ hơn. Thiếu số 1 sẽ khiến bạn khó khăn hơn trong việc ra quyết định.</dd>
                    <dd>Bạn cũng có thể gặp nhiều khó khăn hơn trong công việc và cuộc sống. Những thử thách sẽ xuất hiện như thể để bạn trải nghiệm và nhận ra bài học. Hãy tích cực và mạnh mẽ vượt qua, bạn sẽ gặt hái được nhiều bài học quý giá cho cuộc sống.</dd>
                    `;
                    break;
                case 2:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần học cách thể hiện tình cảm, yêu thương và quan tâm với mọi người. Thiếu số 2 bạn sẽ khó đồng cảm hơn với mọi người. Người khác sẽ cảm thấy bạn là người lạnh lùng, không cảm xúc, khó gần, khó hợp tác.</dd>
                    <dd>Có thể những câu chuyện liên quan đến vấn đề bất đồng trong quan điểm, trong gia định và các mối quan hệ sẽ xuất hiện giúp bạn rèn luyện và thay đổi.</dd>
                    `;
                    break;
                case 3:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần học cách giao tiếp với sự vui vẻ và lạc quan. Thiếu đi số 3 sẽ khiến bạn khó kết bạn hơn với người khác, dễ bị căng thẳng và ít linh hoạt hơn trong cuộc sống.</dd>
                    <dd>Một khi khả năng truyền đạt thông tin giao tiếp bị hạn chế sẽ ảnh hưởng tới sự phát triển các mối quan hệ của bạn.</dd>
                    `;
                    break;
                case 4:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần học cách tổ chức, lên kế hoạch, rèn luyện tính chi tiết và tỉ mỉ trong công việc. Thiếu đi số 4 sẽ khiến bạn cảm thấy khó khăn trong việc lên kế hoạch cho một sự kiện hay bất kỳ kế hoạch nào đó. Bạn sẽ dễ bị rối loạn trong chính công việc của mình.</dd>
                    `;
                    break;
                case 5:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Thiếu số 5 sẽ khiến cuộc sống của bạn đơn điệu, ít màu sắc và dễ trở nên nhàm chán. Cuộc sống của bạn sẽ có nhiều trải nghiệm mới, thú vị hơn biết bao nếu bạn bổ sung cho mình con số 5.</dd>
                    `;
                    break;
                case 6:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần học cách thể hiện sự quan tâm, chăm sóc, tinh tế đối với mọi người. Thiếu số 6 sẽ khiến bạn gặp khó khǎn trong việc bộc lộ, thể hiện cảm xúc.</dd>
                    <dd>Bạn có thể yêu đương nhưng việc không biểu lộ ra ngoài sẽ khiến bạn dễ bị đánh giá là khô khan, lạnh lùng, khó gần và bản thân bạn cũng dễ bị ức chế.</dd>
                    `;
                    break;
                case 7:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bài học của bạn là kinh nghiệm, phân tích vấn đề sâu sắc, cần rèn luyện thêm sự phát triển bên trong. Thiếu đi số 7 sẽ khiến bạn có thiên hướng thực tiễn quá hoặc ít suy nghĩ sâu xa, ít tư duy. Bạn sẽ khó tìm được những gì thuộc về tâm linh.</dd>
                    `;
                    break;
                case 8:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bài học của bạn cần thực tế hơn. Việc thiếu số 8 khiến bạn có xu hướng ít quan tâm đến tiền bạc, vật chất hay những yếu tố thực tế của cuộc sống. Điều đó sẽ khiến bạn gặp khó khăn trong khía cạnh tài chính và sự thăng tiến trong công việc và cuộc sống.</dd>
                    `;
                    break;
                case 9:
                    htmlData += `<dl><h3>Trong biểu đồ của bạn trống số ${i}: </h3></dl>`;
                    htmlData += `
                    <dd>Bạn cần tìm hiểu sự đảm bảo về số lượng và quan tâm đến các vấn đề xã hội, cộng đồng hơn. Trống số 9 khiến bạn có xu hướng ích kỷ, không biết quan tâm đến người khác hoặc ít thể hiện những suy nghĩ, hành động trả lại lợi ích vì người khác.</dd>
                    `;
                    break;
            }
        return htmlData;
}

function generateNameChart(name) {
    let objNumber = countNumbers(convertNameToNumberString(name))
    let htmlTalbe = `
        <table id="bchart">
            <caption>Biểu đồ tên đang được phát triển</caption>
            <tr>
                <td>${createCellContent(7,objNumber)}</td>
                <td>${createCellContent(8,objNumber)}</td>
                <td>${createCellContent(9,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(4,objNumber)}</td>
                <td>${createCellContent(5,objNumber)}</td>
                <td>${createCellContent(6,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(1,objNumber)}</td>
                <td>${createCellContent(2,objNumber)}</td>
                <td>${createCellContent(3,objNumber)}</td>
            </tr>
        </table>
    `;
    return htmlTalbe;
}

function generateMixChart(name,birthday) { 
    let obj1 = countNumbers(birthday+'');
    let obj2 = countNumbers(convertNameToNumberString(name));

    let objNumber = compareAndSum(obj1,obj2);
    
    let htmlTalbe = `
        <table id="bchart">
            <caption>Biểu đồ tên đang được phát triển</caption>
            <tr>
                <td>${createCellContent(7,objNumber)}</td>
                <td>${createCellContent(8,objNumber)}</td>
                <td>${createCellContent(9,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(4,objNumber)}</td>
                <td>${createCellContent(5,objNumber)}</td>
                <td>${createCellContent(6,objNumber)}</td>
            </tr>
            <tr>
                <td>${createCellContent(1,objNumber)}</td>
                <td>${createCellContent(2,objNumber)}</td>
                <td>${createCellContent(3,objNumber)}</td>
            </tr>
        </table>
    `;
    return htmlTalbe;
}