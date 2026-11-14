/* ========================= 

   1) MALLA CURRICULAR 

   (prerrequisitos definidos por "flechas" según tu texto) 

========================= */ 

 

const curriculum = [ 

  // SEMESTRE I 

  { id: "MAT1000", name: "Precálculo", semester: 1, prereq: [] }, // abre FIS109A, y MET402A (cuarto) 

  { id: "BIO141C", name: "Biología de la Célula", semester: 1, prereq: [] }, // abre BIO135T 

  { id: "MET201A", name: "Morfología", semester: 1, prereq: [] }, // abre CS201A (según tu texto, aunque en imagen aparece diferente; lo usamos como dijiste) 

  { id: "MET102A", name: "Fundamentos psicológicos para Terapia Ocupacional", semester: 1, prereq: [] }, // abre MET202A 

  { id: "OCU101A", name: "Desarrollo creativo y destrezas terapéuticas", semester: 1, prereq: [] }, // abre OCU201A 

  { id: "OGU101A", name: "Terapia Ocupacional: profesión y disciplina", semester: 1, prereq: [] }, // no abre nada 

  { id: "OGU102A", name: "Español (VRA / OGU según malla)", semester: 1, prereq: [] }, 

  { id: "VRA100C", name: "Inglés (VRA100C)", semester: 1, prereq: [] }, 

  { id: "VRA2000", name: "Integridad Académica (VRA2000)", semester: 1, prereq: [] }, 

  { id: "VRA4000", name: "Formación General (VRA4000)", semester: 1, prereq: [] }, 

  { id: "FIL2001", name: "Filosofía (FIL2001)", semester: 1, prereq: [] }, // abre CSS601A en sem.6 

 

  // SEMESTRE II 

  { id: "FIS109A", name: "Física", semester: 2, prereq: ["MAT1000"] }, // abre CSS301A (Tercer) 

  { id: "BIO135T", name: "Fisiología", semester: 2, prereq: ["BIO141C"] }, // abre MET301A y CSS302A (Tercer) 

  { id: "MET101A", name: "Integrado de ciencias básicas para farmacología", semester: 2, prereq: [] }, // abre MET401A (Cuarto) 

  { id: "MET202A", name: "Ciclo vital y desarrollo humano", semester: 2, prereq: ["MET102A"] }, // abre MET502A (Semestre 5) 

  { id: "OCU201A", name: "Desarrollo lúdico y destrezas terapéuticas", semester: 2, prereq: ["OCU101A"] }, // abre OCU301A (en tu texto aparece como OCU201A abre habilidades I / OCU301A) 

  { id: "TTP", name: "Formación teológica", semester: 2, prereq: [] }, // no se indica flecha 

  { id: "FG_SEM2", name: "Formación general (sem. II)", semester: 2, prereq: [] }, 

 

  // SEMESTRE III 

  { id: "CSS301A", name: "Análisis del movimiento ocupacional", semester: 3, prereq: ["FIS109A"] }, // abre CSS401A (Cuarto) 

  { id: "MET301A", name: "Fisiopatología general y de sistemas", semester: 3, prereq: ["BIO135T"] }, // no abre nada 

  { id: "PSI2502", name: "Psicología del trabajo y la ocupación", semester: 3, prereq: [] }, // no abre nada 

  { id: "OCU301A", name: "Habilidades y técnicas terapéuticas I", semester: 3, prereq: ["OCU201A"] }, // abre OCU401A? (tu texto dice: OCU301A abre Habilidades y Técnicas Terapéuticas II en Cuarto) 

  { id: "FG_SEM3", name: "Formación general (sem. III)", semester: 3, prereq: [] }, 

 

  // SEMESTRE IV 

  { id: "CSS401A", name: "Patologías del sistema músculo-esquelético", semester: 4, prereq: ["CSS301A"] }, // abre OCU501A (Quinto) 

  { id: "MET401A", name: "Farmacología", semester: 4, prereq: ["MET101A"] }, // abre OCU602A (Semestre 8 en tu texto) 

  { id: "MET402A", name: "Bioestadística", semester: 4, prereq: ["MAT1000"] }, // abre OCU704A (Sem.7) y MWT801A (Sem.8) (tu texto) 

  { id: "MET403A", name: "Alteraciones del sistema nervioso en niños y adolescentes", semester: 4, prereq: [] }, // abre MET502A en sem.5 

  { id: "OCU401A", name: "Habilidades y técnicas terapéuticas II", semester: 4, prereq: ["OCU301A"] }, // abre OCU502A (Sem.5) 

  { id: "FG_SEM4", name: "Formación general (sem. IV)", semester: 4, prereq: [] }, 

 

  // SEMESTRE V 

  { id: "OCU501A", name: "Ergonomía y salud ocupacional", semester: 5, prereq: ["CSS401A"] }, // abre OCU601A (sem.6) y OCU603A (sem.6) 

  { id: "OCU502A", name: "Semología y anamnesis", semester: 5, prereq: ["OCU401A"] }, // abre OCU602A (sem.6) 

  { id: "MET501A", name: "Salud pública", semester: 5, prereq: ["MAT1000"] }, // tu texto: abre MET501A (no abre nada) pero en malla indica flecha desde MET402A hacia MET501A (sem 5) 

  { id: "MET502A", name: "Salud mental infanto-juvenil", semester: 5, prereq: ["MET202A", "MET403A"] }, // abre OCU702A (sem.7) 

  { id: "MET503A", name: "Alteraciones del sistema nervioso en adultos", semester: 5, prereq: [] }, // abre MET601A (sem.6) 

  { id: "FG_SEM5", name: "Formación general (sem. V)", semester: 5, prereq: [] }, 

 

  // SEMESTRE VI 

  { id: "OCU601A", name: "Tecnologías de apoyo a la rehab e inclusión social", semester: 6, prereq: ["OCU501A"] }, // abre OCU701A y OCU802A (sem.8) 

  { id: "OCU602A", name: "Razonamiento profesional", semester: 6, prereq: ["OCU502A"] }, // abre OCU702A (sem.7) 

  { id: "OCU603A", name: "Intervención y rehabilitación sociolaboral", semester: 6, prereq: ["OCU501A"] }, // abre OCU703A (sem.7) 

  { id: "MET601A", name: "Salud mental adulto y persona mayor", semester: 6, prereq: ["MET503A"] }, // abre OCU802A (sem.8) 

  { id: "CSS601A", name: "Bioética", semester: 6, prereq: ["FIL2001"] }, // abre OCU704A y OCU801A (sem.7) 

  { id: "FG_SEM6", name: "Formación general (sem. VI)", semester: 6, prereq: [] }, 

 

  // SEMESTRE VII 

  { id: "OCU801A", name: "Evaluación e intervención en salud física adulto y persona mayor", semester: 7, prereq: ["CSS601A"] }, // abre OCU701A (sem.8) 

  { id: "OCU702A", name: "Evaluación e intervención en niños y adolescentes", semester: 7, prereq: ["MET502A", "OCU602A"] }, // según tu texto: MET502A y OCU602A abren OCU702A 

  { id: "OCU703A", name: "Evaluación e intervención psicosocial y comunitaria", semester: 7, prereq: ["OCU603A"] }, // no abre nada 

  { id: "OCU704A", name: "Investigación aplicada en ciencia de la ocupación", semester: 7, prereq: ["MET402A", "CSS601A"] }, // abre OCU803A (sem.8) 

  { id: "FG_SEM7", name: "Formación general (sem. VII)", semester: 7, prereq: [] }, 

 

  // SEMESTRE VIII 

  { id: "OCU701A", name: "Ortotica", semester: 8, prereq: ["OCU801A", "OCU601A"] }, // tu texto: OCU601A y OCU801A 

  { id: "MET801A", name: "Optativo de profundización", semester: 8, prereq: ["OCU701A"] }, // no se indicó flecha; lo dejo con precond (ajustable) 

  { id: "OCU802A", name: "Evaluación e intervención en salud mental adulto y persona mayor", semester: 8, prereq: ["OCU601A", "MET601A"] }, // tu texto 

  { id: "OCU803A", name: "Unidad de investigación en ciencia de la ocupación", semester: 8, prereq: ["OCU704A"] }, // tu texto 

  { id: "FG_SEM8", name: "Formación general (sem. VIII)", semester: 8, prereq: [] }, 

 

  // SEMESTRE IX (internados: “no se pueden cursar sin haber cursado los anteriores”) 

  { id: "OCU901A", name: "Internado salud física", semester: 9, prereq: ["OCU701A", "OCU802A", "OCU803A"] }, 

  { id: "OCU902A", name: "Internado salud mental", semester: 9, prereq: ["OCU701A", "OCU802A", "OCU803A"] }, 

  { id: "OCU905A", name: "Internado electivo", semester: 9, prereq: ["OCU701A", "OCU802A", "OCU803A"] }, 

 

  // SEMESTRE X 

  { id: "OCU903A", name: "Internado infanto-juvenil", semester: 10, prereq: ["OCU901A", "OCU902A", "OCU905A"] }, 

  { id: "OCU904A", name: "Internado socio-comunitario", semester: 10, prereq: ["OCU901A", "OCU902A", "OCU905A"] } 

]; 

 

// Nota: Algunos ramos en tu texto aparecen con grafías/IDs distintos (ej. “CS201A”, “MWT801A”). 

// La app funciona, pero si quieres exactitud 100%, dime los IDs definitivos que usa tu universidad. 

 

// ========================= 

// Estado / persistencia 

// ========================= 

 

const STORAGE_KEY = "consejeria_uccl_to_aprobados_v1"; 

const state = { approved: new Set() }; 

 

function loadState() { 

  const raw = localStorage.getItem(STORAGE_KEY); 

  if (!raw) return; 

  try { 

    const arr = JSON.parse(raw); 

    state.approved = new Set(arr); 

  } catch (e) { 

    console.warn("No se pudo cargar estado:", e); 

  } 

} 

 

function saveState() { 

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.approved])); 

} 

 

function isAvailable(ramo) { 

  if (state.approved.has(ramo.id)) return true; 

  return ramo.prereq.every(p => state.approved.has(p)); 

} 

 

function getLockedReason(ramo) { 

  const missing = ramo.prereq.filter(p => !state.approved.has(p)); 

  if (missing.length === 0) return ""; 

  return `Requiere: ${missing.join(", ")}`; 

} 

 

function renderCurriculum() { 

  const container = document.getElementById("curriculum"); 

  container.innerHTML = ""; 

 

  const sorted = [...curriculum].sort((a, b) => a.semester - b.semester); 

  const total = curriculum.length; 

  const approvedCount = state.approved.size; 

  const pct = total ? Math.round((approvedCount / total) * 100) : 0; 

 

  document.getElementById("progressFill").style.width = `${pct}%`; 

  document.getElementById("progressText").textContent = `${pct}% · ${approvedCount}/${total} ramos`; 

 

  for (const ramo of sorted) { 

    const available = isAvailable(ramo); 

    const locked = !available; 

 

    const card = document.createElement("div"); 

    card.className = "ramo" + (locked ? " ramo--locked" : ""); 

 

    card.innerHTML = ` 

      <div class="ramo__top"> 

        <div> 

          <h3>${ramo.id}</h3> 

          <div class="ramo__meta">${ramo.name}</div> 

        </div> 

        <span class="badge">Semestre ${ramo.semester}</span> 

      </div> 

 

      <div class="ramo__req"> 

        ${locked ? getLockedReason(ramo) : "✅ Disponible para aprobar"} 

      </div> 

 

      <div class="ramo__actions"> 

        <label title="Marca si ya aprobaste este ramo"> 

          <input class="checkbox" type="checkbox" 

            data-id="${ramo.id}" 

            ${state.approved.has(ramo.id) ? "checked" : ""} 

            ${locked ? "disabled" : ""}> 

          Ya lo aprobé 

        </label> 

      </div> 

    `; 

 

    container.appendChild(card); 

  } 

 

  container.querySelectorAll("input[type='checkbox']").forEach(cb => { 

    cb.addEventListener("change", (e) => { 

      const id = e.target.getAttribute("data-id"); 

      if (e.target.checked) state.approved.add(id); 

      else state.approved.delete(id); 

 

      saveState(); 

      renderCurriculum(); 

    }); 

  }); 

} 

 

// reset 

document.getElementById("resetBtn").addEventListener("click", () => { 

  if (!confirm("¿Seguro que quieres reiniciar tu progreso?")) return; 

  state.approved = new Set(); 

  saveState(); 

  renderCurriculum(); 

}); 

 

/* ========================= 

   2) CALCULADORA DE NOTAS (1 a 7.0) 

========================= */ 

 

const gradeCount = document.getElementById("gradeCount"); 

const weightsMode = document.getElementById("weights"); 

const inputsContainer = document.getElementById("inputsContainer"); 

const calcBtn = document.getElementById("calcBtn"); 

const result = document.getElementById("result"); 

 

function buildInputs() { 

  const n = Math.max(1, Math.min(20, Number(gradeCount.value) || 1)); 

  const weighted = weightsMode.value === "yes"; 

 

  inputsContainer.innerHTML = ""; 

 

  for (let i = 0; i < n; i++) { 

    const div = document.createElement("div"); 

    div.className = "gradeInput"; 

    div.innerHTML = ` 

      <h4>Evaluación ${i + 1}</h4> 

      <div class="row2"> 

        <div class="field" style="gap:6px;"> 

          <label>Nota (1 a 7)</label> 

          <input class="gradeVal" type="number" min="1" max="7" step="0.1" value="" placeholder="Ej: 6.0"/> 

        </div> 

        <div class="field" style="gap:6px; ${weighted ? "" : "display:none;"}"> 

          <label>Peso</label> 

          <input class="gradeWeight" type="number" min="0" step="0.1" value="1" /> 

        </div> 

      </div> 

    `; 

    inputsContainer.appendChild(div); 

  } 

} 

 

function getNumbers() { 

  const grades = []; 

  const weights = []; 

 

  inputsContainer.querySelectorAll(".gradeInput").forEach((wrap) => { 

    const gv = wrap.querySelector(".gradeVal")?.value; 

    const g = Number(gv); 

    grades.push(Number.isFinite(g) ? g : null); 

 

    if (weightsMode.value === "yes") { 

      const wv = wrap.querySelector(".gradeWeight")?.value; 

      const w = Number(wv); 

      weights.push(Number.isFinite(w) ? w : null); 

    } 

  }); 

 

  return { grades, weights }; 

} 

 

function calc() { 

  const { grades, weights } = getNumbers(); 

 

  if (grades.some(v => v === null)) { 

    result.innerHTML = `<strong>⚠️ Revisa tus notas</strong> Completa todas las evaluaciones con números entre 1 y 7.`; 

    return; 

  } 

 

  const weighted = weightsMode.value === "yes"; 

  let promedio = 0; 

 

  if (!weighted) { 

    promedio = grades.reduce((a, b) => a + b, 0) / grades.length; 

  } else { 

    if (weights.some(w => w === null || w < 0)) { 

      result.innerHTML = `<strong>⚠️ Pesos inválidos</strong> Asegúrate de ingresar pesos correctos (>= 0).`; 

      return; 

    } 

    const sumW = weights.reduce((a, b) => a + b, 0); 

    if (sumW === 0) { 

      result.innerHTML = `<strong>⚠️ Pesos en cero</strong> La suma de pesos debe ser mayor que 0.`; 

      return; 

    } 

    promedio = grades.reduce((acc, g, i) => acc + g * weights[i], 0) / sumW; 

  } 

 

  const targetRaw = document.getElementById("target").value; 

  const remaining = Number(document.getElementById("remaining").value || 0); 

  const target = targetRaw === "" ? null : Number(targetRaw); 

 

  if (target === null || !Number.isFinite(target) || remaining <= 0) { 

    result.innerHTML = ` 

      <strong>✅ Promedio calculado</strong> 

      Promedio: <b>${promedio.toFixed(2)}</b> 

    `; 

    return; 

  } 

 

  // Estimación aproximada: restantes con la misma "importancia". 

  // (Si usas ponderación, aquí asumiríamos mismo peso relativo; mantenemos el comportamiento simple.) 

  const k = grades.length; 

  const x = (target * (k + remaining) - promedio * k) / remaining; 

 

  result.innerHTML = ` 

    <strong>✅ Promedio actual</strong> 

    Promedio: <b>${promedio.toFixed(2)}</b> 

    <div style="margin-top:8px;" class="muted"> 

      Si quieres llegar a <b>${target.toFixed(2)}</b> y tienes <b>${remaining}</b> evaluaciones restantes, 

      necesitarías aprox.: <b>${x.toFixed(2)}</b>. 

    </div> 

  `; 

} 

 

gradeCount.addEventListener("change", buildInputs); 

weightsMode.addEventListener("change", buildInputs); 

calcBtn.addEventListener("click", calc); 

 

// INIT 

loadState(); 

buildInputs(); 

renderCurriculum(); 

document.addEventListener("DOMContentLoaded", function () {
   const boton = document.getElementById("btnConsultas");
   
    boton.addEventListener("click", function () { 
       window.location.href = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=-tn1Xz_4wUqk0utI6goA0oyxOGhF_NRLvYzknqWqZ7JUMVc0MUZRTkpYMEpBRlNKTk5CR1ZQSkJXUy4u"; 
    }); 
});

