const topicos = ["Harmonia I", "Harmonia II", "Solfejo", "Contraponto I", "Contraponto II", "Harmonia I", "Harmonia II", "Solfejo", "Contraponto I", "Contraponto II"];
const conteudos = document.getElementById('conteudos');
topicos.forEach( topico => {
	let dinConteudos = `
	  <div class="col-12 col-md-6 col-lg-4">
	    <div class="card shadow-sm h-100 d-flex flex-column" style="min-height: 220px;">
	      
	      <div class="flex-grow-1 d-flex align-items-center justify-content-center text-center card-topo rounded-top p-4">
	        <h4 class="m-0">${topico}</h4>
	      </div>

	      <div class="p-3 rounded-bottom p-4 card-baixo">
	        <button class="btn btn-light w-100 fw-semibold">
	          Abrir módulo
	        </button>
	      </div>

	    </div>
	  </div>
	`;
	conteudos.innerHTML += dinConteudos;
});