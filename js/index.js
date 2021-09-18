<script>
      $('#contacto').on('shown.bs.modal', function (e){
        console.log('El Modal contacto se está mostrando');
      });
      $('#contacto').on('show.bs.modal', function (e){
        console.log('El Modal contacto se está mostrando');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
      });
      $('#contacto').on('hidden.bs.modal', function (e){
        console.log('El Modal contacto se está mostrando');
        $('#contactoBtn').prop('disabled', false);
      });
      $('#contacto').on('hide.bs.modal', function (e){
        console.log('El Modal contacto se está mostrando');
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
      });
    </script>
    <script>
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
      });
    </script>
    <script>
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      });
    </script>