document.addEventListener('DOMContentLoaded', function () {
   const icones = document.querySelectorAll('aside ul li i');
   let iconeSelecionado = null; // Variável para rastrear o ícone selecionado atualmente

   icones.forEach(icone => {
      icone.addEventListener('click', function () {
         // Remove a classe do ícone anteriormente selecionado, se houver
         if (iconeSelecionado) {
            iconeSelecionado.classList.remove('icone-selecionado');
         }

         // Adiciona a classe ao ícone clicado
         this.classList.add('icone-selecionado');

         // Atualiza o ícone selecionado
         iconeSelecionado = this;

         console.log('Ícone clicado:', this.classList);

         if (this.classList.contains('fa-house')) {
            console.log('Ícone da casa clicado!');
         } else if (this.classList.contains('fa-chart-simple')) {
            console.log('Ícone do gráfico clicado!');
         } else if (this.classList.contains('fa-calendar-days')) {
            console.log('Ícone do gráfico clicado!');
         } else if (this.classList.contains('fa-bolt')) {
            console.log('Ícone do gráfico clicado!');
         } else if (this.classList.contains('fa-bell')) {
            console.log('Ícone do gráfico clicado!');
         } else if (this.classList.contains('fa-gear')) {
            console.log('Ícone do gráfico clicado!');
         }
      });
   });
});