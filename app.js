const DEFAULT_CATALOG = {
  version: "1.0.0-mau",
  releaseDate: "2026-06-16",
  changeLog: "Bộ catalog mẫu ban đầu cho app PCCC Check Offline.",
  systems: [
    {
      id: "bao_chay_tu_dong",
      name: "Hệ thống báo cháy tự động",
      description: "Kiểm tra trung tâm báo cháy, đầu báo, nút nhấn, chuông/còi/đèn và nguồn dự phòng.",
      checklist: [
        {id:"bc01", group:"Hồ sơ", title:"Có hồ sơ thiết kế, nghiệm thu, bản vẽ hoàn công hệ thống báo cháy", instruction:"Đối chiếu hồ sơ cơ sở cung cấp; ghi nhận thiếu hồ sơ hoặc hồ sơ không khớp thực tế.", severity:"Quan trọng", recommendation:"Đề nghị bổ sung, hoàn thiện hồ sơ hệ thống báo cháy tự động."},
        {id:"bc02", group:"Thiết bị", title:"Trung tâm báo cháy hoạt động bình thường, không tắt nguồn", instruction:"Quan sát đèn nguồn, màn hình/tín hiệu hiển thị, tình trạng khóa tủ, âm báo sự cố.", severity:"Rất quan trọng", recommendation:"Đề nghị kiểm tra, sửa chữa trung tâm báo cháy để bảo đảm hoạt động thường trực."},
        {id:"bc03", group:"Thiết bị", title:"Đầu báo khói/nhiệt không bị che, tháo, sơn phủ, bụi bẩn hoặc hư hỏng", instruction:"Kiểm tra xác suất tại các khu vực đại diện, nhất là kho, hành lang, phòng kỹ thuật.", severity:"Quan trọng", recommendation:"Đề nghị vệ sinh, lắp đặt lại hoặc thay thế đầu báo không bảo đảm yêu cầu."},
        {id:"bc04", group:"Thử vận hành", title:"Thử tín hiệu báo cháy về trung tâm và chuông/còi/đèn báo cháy", instruction:"Thử có kiểm soát bằng thiết bị thử hoặc nút nhấn khẩn; có đại diện cơ sở chứng kiến.", severity:"Rất quan trọng", recommendation:"Đề nghị kiểm tra, khắc phục đường tín hiệu và thiết bị cảnh báo không hoạt động."},
        {id:"bc05", group:"Bảo trì", title:"Có nhật ký kiểm tra, bảo trì, bảo dưỡng định kỳ", instruction:"Kiểm tra sổ theo dõi, hợp đồng bảo trì hoặc biên bản bảo dưỡng gần nhất.", severity:"Quan trọng", recommendation:"Đề nghị lập và duy trì nhật ký kiểm tra, bảo trì hệ thống báo cháy."}
      ]
    },
    {
      id: "chua_chay_tu_dong",
      name: "Hệ thống chữa cháy tự động bằng nước/bọt",
      description: "Kiểm tra sprinkler, van, đồng hồ áp lực, bơm, bể nước, tín hiệu liên động.",
      checklist: [
        {id:"cc01", group:"Hồ sơ", title:"Có hồ sơ thiết kế, nghiệm thu, bảo trì hệ thống chữa cháy tự động", instruction:"Đối chiếu hồ sơ với khu vực thực tế được bảo vệ.", severity:"Quan trọng", recommendation:"Đề nghị bổ sung hồ sơ liên quan hệ thống chữa cháy tự động."},
        {id:"cc02", group:"Thiết bị", title:"Van điều khiển chính ở trạng thái mở và có niêm phong/biển chỉ dẫn", instruction:"Quan sát trạng thái van, vị trí lắp đặt, khả năng tiếp cận, dấu hiệu bị khóa sai trạng thái.", severity:"Rất quan trọng", recommendation:"Đề nghị duy trì van điều khiển ở trạng thái mở, có niêm phong và biển chỉ dẫn rõ ràng."},
        {id:"cc03", group:"Thiết bị", title:"Đầu phun sprinkler không bị che khuất, sơn phủ, biến dạng hoặc thiếu khoảng trống bảo vệ", instruction:"Kiểm tra khu vực kho, trần giả, nơi kê hàng cao hoặc có thay đổi công năng.", severity:"Rất quan trọng", recommendation:"Đề nghị tháo dỡ vật cản, thay thế đầu phun hư hỏng và bảo đảm khoảng cách bảo vệ."},
        {id:"cc04", group:"Thử vận hành", title:"Bơm chữa cháy và tín hiệu liên động hoạt động theo chế độ tự động/thủ công", instruction:"Chạy thử có kiểm soát; ghi nhận áp lực, thời gian khởi động, trạng thái tủ điều khiển.", severity:"Rất quan trọng", recommendation:"Đề nghị kiểm tra, sửa chữa bơm/tủ điều khiển để bảo đảm hệ thống hoạt động khi có cháy."},
        {id:"cc05", group:"Nguồn nước", title:"Bể nước, đường ống, đồng hồ áp lực bảo đảm tình trạng sẵn sàng", instruction:"Kiểm tra mực nước, rò rỉ, đồng hồ áp, van xả thử và đường ống chính.", severity:"Rất quan trọng", recommendation:"Đề nghị bổ sung nguồn nước, xử lý rò rỉ và khôi phục áp lực hệ thống."}
      ]
    },
    {
      id: "binh_chua_chay",
      name: "Bình chữa cháy xách tay, xe đẩy",
      description: "Kiểm tra số lượng, chủng loại, vị trí, tem kiểm định, áp suất, niêm chì.",
      checklist: [
        {id:"b01", group:"Số lượng", title:"Bố trí đủ số lượng, đúng chủng loại bình chữa cháy theo khu vực nguy hiểm", instruction:"Đối chiếu thực tế với quy mô, công năng và nguy cơ cháy tại cơ sở.", severity:"Quan trọng", recommendation:"Đề nghị bổ sung bình chữa cháy phù hợp tại các khu vực còn thiếu."},
        {id:"b02", group:"Tình trạng", title:"Bình còn áp suất, còn hạn sử dụng/kiểm định, tem nhãn rõ ràng", instruction:"Quan sát kim đồng hồ áp, tem kiểm định, niêm chì, vòi phun, thân bình.", severity:"Rất quan trọng", recommendation:"Đề nghị nạp sạc, kiểm định hoặc thay thế bình chữa cháy không bảo đảm."},
        {id:"b03", group:"Bố trí", title:"Bình đặt nơi dễ thấy, dễ lấy, không bị che khuất hoặc khóa kín", instruction:"Kiểm tra lối đi, cửa ra vào, kho, khu vực điện, bếp, nơi tập trung người.", severity:"Quan trọng", recommendation:"Đề nghị di chuyển bình đến vị trí dễ thấy, dễ lấy và có biển chỉ dẫn nếu cần."}
      ]
    },
    {
      id: "den_su_co_thoat_nan",
      name: "Đèn sự cố, đèn chỉ dẫn thoát nạn",
      description: "Kiểm tra vị trí, hướng chỉ dẫn, nguồn pin dự phòng và khả năng tự sáng khi mất điện.",
      checklist: [
        {id:"d01", group:"Vị trí", title:"Đèn chỉ dẫn thoát nạn bố trí đúng hướng, dễ nhìn, không bị che khuất", instruction:"Kiểm tra hành lang, cầu thang, cửa thoát nạn, khu vực chuyển hướng thoát nạn.", severity:"Quan trọng", recommendation:"Đề nghị lắp bổ sung hoặc điều chỉnh hướng đèn chỉ dẫn thoát nạn."},
        {id:"d02", group:"Thử vận hành", title:"Đèn sự cố và đèn chỉ dẫn tự sáng khi mất điện", instruction:"Thử bằng nút test hoặc ngắt nguồn khu vực có kiểm soát.", severity:"Rất quan trọng", recommendation:"Đề nghị thay pin, sửa chữa hoặc thay thế đèn không hoạt động."}
      ]
    },
    {
      id: "bom_nguon_nuoc",
      name: "Trạm bơm, bể nước chữa cháy",
      description: "Kiểm tra bơm điện, bơm diesel, bơm bù áp, tủ điều khiển, nhiên liệu và nguồn nước.",
      checklist: [
        {id:"p01", group:"Bơm", title:"Bơm điện, bơm diesel, bơm bù áp hoạt động ở chế độ tự động và thủ công", instruction:"Chạy thử có kiểm soát, ghi nhận áp lực, âm thanh bất thường, tình trạng tủ điều khiển.", severity:"Rất quan trọng", recommendation:"Đề nghị sửa chữa, bảo trì bơm chữa cháy để bảo đảm sẵn sàng hoạt động."},
        {id:"p02", group:"Nguồn", title:"Nguồn điện, nhiên liệu diesel, ắc quy và bể nước bảo đảm sẵn sàng", instruction:"Kiểm tra mực nước, mức nhiên liệu, ắc quy, bộ sạc, nguồn điện cấp cho tủ bơm.", severity:"Rất quan trọng", recommendation:"Đề nghị bổ sung nhiên liệu, nước dự trữ và khắc phục nguồn cấp cho trạm bơm."},
        {id:"p03", group:"Bảo trì", title:"Có nhật ký chạy thử bơm, bảo trì, bảo dưỡng định kỳ", instruction:"Kiểm tra sổ vận hành, lịch chạy thử, biên bản bảo dưỡng gần nhất.", severity:"Quan trọng", recommendation:"Đề nghị duy trì nhật ký chạy thử và bảo trì trạm bơm định kỳ."}
      ]
    }
  ]
};

const $ = (id) => document.getElementById(id);
let catalog = loadCatalog();
let currentResults = {};
let currentReport = null;
let deferredPrompt = null;

function loadCatalog(){
  const saved = localStorage.getItem('pccc_catalog');
  if(saved){ try { return JSON.parse(saved); } catch(e){} }
  localStorage.setItem('pccc_catalog', JSON.stringify(DEFAULT_CATALOG));
  return structuredClone(DEFAULT_CATALOG);
}
function saveCatalog(c){ localStorage.setItem('pccc_catalog', JSON.stringify(c)); catalog=c; renderAll(); }
function inspections(){ return JSON.parse(localStorage.getItem('pccc_inspections')||'[]'); }
function saveInspections(list){ localStorage.setItem('pccc_inspections', JSON.stringify(list)); }
function showView(name){ document.querySelectorAll('.view').forEach(v=>v.classList.remove('active')); $(name).classList.add('active'); window.scrollTo(0,0); }
function today(){ return new Date().toISOString().slice(0,10); }
function escapeHtml(s=''){ return String(s).replace(/[&<>"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
function resultBadge(r){ const cls = r==='Đạt'?'ok':r==='Không đạt'?'bad':'na'; return `<span class="badge ${cls}">${escapeHtml(r||'Chưa chọn')}</span>`; }

function renderAll(){ renderVersion(); renderCatalog(); renderSystemSelector(); renderHistory(); }
function renderVersion(){ $('catalogVersion').textContent = `Phiên bản hiện dùng: ${catalog.version || 'không rõ'} | ${catalog.releaseDate || ''}`; }
function renderCatalog(){
  $('catalogList').innerHTML = catalog.systems.map(sys=>`<div class="system-card"><h3>${escapeHtml(sys.name)}</h3><p class="muted">${escapeHtml(sys.description)}</p><b>Nội dung kiểm tra mẫu:</b><ul>${sys.checklist.map(i=>`<li>${escapeHtml(i.title)}</li>`).join('')}</ul></div>`).join('');
}
function renderSystemSelector(){
  $('systemSelector').innerHTML = catalog.systems.map(sys=>`<label class="check-pill"><input type="checkbox" value="${sys.id}"> ${escapeHtml(sys.name)}</label>`).join('');
}
function renderHistory(){
  const list = inspections();
  if(!list.length){ $('inspectionList').className='list empty'; $('inspectionList').textContent='Chưa có dữ liệu.'; return; }
  $('inspectionList').className='list';
  $('inspectionList').innerHTML = list.map((it,idx)=>`<div class="item"><b>${escapeHtml(it.facility.name || 'Chưa ghi tên cơ sở')}</b><br><span class="muted">${escapeHtml(it.facility.address||'')} · ${escapeHtml(it.date||'')}</span><br><span class="tag">${it.failedCount} lỗi / ${it.totalCount} mục</span><div class="row" style="margin-top:8px"><button class="secondary" onclick="openSavedReport(${idx})">Xem báo cáo</button><button class="danger" onclick="deleteInspection(${idx})">Xóa</button></div></div>`).join('');
}
window.deleteInspection = function(idx){ if(confirm('Xóa lần kiểm tra này?')){ const list=inspections(); list.splice(idx,1); saveInspections(list); renderHistory(); } }
window.openSavedReport = function(idx){ currentReport = inspections()[idx]; renderReport(currentReport); showView('viewReport'); }

function buildChecklist(){
  const selected = [...document.querySelectorAll('#systemSelector input:checked')].map(i=>i.value);
  if(!selected.length){ alert('Vui lòng chọn ít nhất 1 hệ thống cần kiểm tra.'); return; }
  currentResults = {};
  const html = selected.map(sid=>{
    const sys = catalog.systems.find(s=>s.id===sid);
    return `<div class="system-section"><h3>${escapeHtml(sys.name)}</h3>${sys.checklist.map(item=>checkItemHtml(sys,item)).join('')}</div>`;
  }).join('');
  $('checklistArea').innerHTML = html;
  $('checklistContainer').classList.remove('hidden');
}
function checkItemHtml(sys,item){
  const key = `${sys.id}__${item.id}`;
  currentResults[key] = {systemId:sys.id, systemName:sys.name, itemId:item.id, group:item.group, title:item.title, instruction:item.instruction, severity:item.severity, recommendation:item.recommendation, result:'', note:'', photos:[]};
  return `<div class="check-item" data-key="${key}"><div class="check-title">${escapeHtml(item.group)} - ${escapeHtml(item.title)}</div><div class="instruction">${escapeHtml(item.instruction)}<br><b>Mức độ:</b> ${escapeHtml(item.severity||'')}</div><div class="answers"><button class="answer ok" onclick="setResult('${key}','Đạt',this)">Đạt</button><button class="answer bad" onclick="setResult('${key}','Không đạt',this)">Không đạt</button><button class="answer na" onclick="setResult('${key}','Không áp dụng',this)">Không áp dụng</button></div><div class="note-row"><label>Ghi chú<input onchange="setNote('${key}',this.value)" placeholder="Ghi nhận hiện trạng/lỗi..."></label><label>Kiến nghị<input onchange="setRecommendation('${key}',this.value)" value="${escapeHtml(item.recommendation||'')}"></label></div><div style="margin-top:8px"><label class="secondary" style="display:inline-block;border-radius:12px;padding:10px;cursor:pointer">Chụp/chọn ảnh<input type="file" accept="image/*" capture="environment" multiple style="display:none" onchange="addPhotos('${key}',this.files)"></label><div id="photos_${key}" class="photo-preview"></div></div></div>`;
}
window.setResult = function(key,val,btn){ currentResults[key].result=val; const box=btn.closest('.check-item'); box.querySelectorAll('.answer').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
window.setNote = (key,val)=> currentResults[key].note = val;
window.setRecommendation = (key,val)=> currentResults[key].recommendation = val;
window.addPhotos = function(key, files){
  [...files].slice(0,5).forEach(file=>{
    const reader = new FileReader();
    reader.onload = e => { currentResults[key].photos.push(e.target.result); renderPhotoPreview(key); };
    reader.readAsDataURL(file);
  });
}
function renderPhotoPreview(key){ $('photos_'+key).innerHTML = currentResults[key].photos.map(src=>`<img src="${src}" alt="Ảnh minh chứng">`).join(''); }

function collectInspection(){
  const facility = {name:$('facilityName').value, address:$('facilityAddress').value, type:$('facilityType').value, representative:$('representative').value, phone:$('phone').value, managementUnit:$('managementUnit').value};
  const officer = $('officerName').value;
  const date = $('inspectionDate').value || today();
  const results = Object.values(currentResults);
  const failedCount = results.filter(r=>r.result==='Không đạt').length;
  return {id:Date.now(), catalogVersion:catalog.version, date, officer, facility, results, failedCount, totalCount:results.length, createdAt:new Date().toISOString()};
}
function saveCurrentInspection(){
  if(!Object.keys(currentResults).length){ alert('Chưa có checklist để lưu.'); return null; }
  const report = collectInspection();
  const list = inspections(); list.unshift(report); saveInspections(list); renderHistory(); currentReport = report; alert('Đã lưu lần kiểm tra offline trên thiết bị.'); return report;
}
function renderReport(report){
  const failed = report.results.filter(r=>r.result==='Không đạt');
  const photos = report.results.flatMap(r=>r.photos.map(src=>({src, title:r.title, system:r.systemName, note:r.note})));
  $('reportOutput').innerHTML = `<h1>PHIẾU KIỂM TRA HỆ THỐNG PCCC</h1><p style="text-align:center">Phiên bản catalog: ${escapeHtml(report.catalogVersion||'')}</p><h2>I. Thông tin cơ sở</h2><table><tr><td><b>Tên cơ sở</b></td><td>${escapeHtml(report.facility.name)}</td></tr><tr><td><b>Địa chỉ</b></td><td>${escapeHtml(report.facility.address)}</td></tr><tr><td><b>Loại hình</b></td><td>${escapeHtml(report.facility.type)}</td></tr><tr><td><b>Người đại diện</b></td><td>${escapeHtml(report.facility.representative)}</td></tr><tr><td><b>SĐT</b></td><td>${escapeHtml(report.facility.phone)}</td></tr><tr><td><b>Đơn vị quản lý</b></td><td>${escapeHtml(report.facility.managementUnit)}</td></tr><tr><td><b>Ngày kiểm tra</b></td><td>${escapeHtml(report.date)}</td></tr><tr><td><b>Cán bộ kiểm tra</b></td><td>${escapeHtml(report.officer)}</td></tr></table><h2>II. Kết quả kiểm tra chi tiết</h2><table><thead><tr><th>STT</th><th>Hệ thống</th><th>Nội dung kiểm tra</th><th>Kết quả</th><th>Ghi chú</th><th>Kiến nghị</th></tr></thead><tbody>${report.results.map((r,i)=>`<tr><td>${i+1}</td><td>${escapeHtml(r.systemName)}</td><td>${escapeHtml(r.title)}<br><small>${escapeHtml(r.instruction)}</small></td><td>${resultBadge(r.result)}</td><td>${escapeHtml(r.note)}</td><td>${escapeHtml(r.recommendation)}</td></tr>`).join('')}</tbody></table><h2>III. Tổng hợp lỗi không đạt</h2>${failed.length?`<table><thead><tr><th>STT</th><th>Hệ thống</th><th>Lỗi phát hiện</th><th>Mức độ</th><th>Kiến nghị</th></tr></thead><tbody>${failed.map((r,i)=>`<tr><td>${i+1}</td><td>${escapeHtml(r.systemName)}</td><td>${escapeHtml(r.title)}<br>${escapeHtml(r.note)}</td><td>${escapeHtml(r.severity)}</td><td>${escapeHtml(r.recommendation)}</td></tr>`).join('')}</tbody></table>`:'<p>Không ghi nhận mục Không đạt.</p>'}<h2>IV. Hình ảnh minh chứng</h2>${photos.length?`<div class="photo-report">${photos.map(p=>`<figure><img src="${p.src}"><figcaption><b>${escapeHtml(p.system)}</b><br>${escapeHtml(p.title)}<br>${escapeHtml(p.note)}</figcaption></figure>`).join('')}</div>`:'<p>Chưa có ảnh minh chứng.</p>'}<h2>V. Ký xác nhận</h2><table><tr><td style="height:90px;text-align:center"><b>Đại diện cơ sở</b><br><br><br></td><td style="height:90px;text-align:center"><b>Cán bộ kiểm tra</b><br><br><br></td></tr></table>`;
}

window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt=e; $('installBtn').classList.remove('hidden'); });
$('installBtn').onclick = async()=>{ if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt=null; $('installBtn').classList.add('hidden'); } };
$('newInspectionBtn').onclick=()=>{ $('inspectionDate').value=today(); showView('viewInspection'); };
$('catalogBtn').onclick=()=>showView('viewCatalog');
document.querySelectorAll('.backHome').forEach(b=>b.onclick=()=>showView('viewHome'));
$('buildChecklistBtn').onclick=buildChecklist;
$('saveInspectionBtn').onclick=saveCurrentInspection;
$('previewReportBtn').onclick=()=>{ const r = Object.keys(currentResults).length ? collectInspection() : currentReport; if(!r){alert('Chưa có dữ liệu báo cáo.');return;} currentReport=r; renderReport(r); showView('viewReport'); };
$('backToInspection').onclick=()=>showView('viewInspection');
$('printReportBtn').onclick=()=>window.print();
$('updateCatalogBtn').onclick=()=>{ try{ const c=JSON.parse($('catalogJsonInput').value); if(!c.systems || !Array.isArray(c.systems)) throw new Error('JSON thiếu systems'); saveCatalog(c); $('catalogJsonInput').value=''; alert('Đã cập nhật catalog mới và lưu offline.'); }catch(e){ alert('JSON không hợp lệ: '+e.message); } };
$('resetCatalogBtn').onclick=()=>{ if(confirm('Khôi phục catalog mẫu?')) saveCatalog(structuredClone(DEFAULT_CATALOG)); };
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js'); }
renderAll();
