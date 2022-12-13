
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle");
  
  
  toggle.addEventListener("click" , () =>{
      sidebar.classList.toggle("close");
  })
  
  searchBtn.addEventListener("click" , () =>{
      sidebar.classList.remove("close");
  })
  

  $(".sidebar ul li").on('click', function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
})