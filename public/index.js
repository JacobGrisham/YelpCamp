// Loading screen
document.onreadystatechange = () => { 
  if (document.readyState !== "complete") { 
      document.querySelector(".landing-page").style.visibility = "hidden"; 
      document.querySelector(".loader").style.visibility = "visible"; 
  } else { 
      document.querySelector(".loader").style.display = "none"; 
      document.querySelector(".landing-page").style.visibility = "visible"; 
  } 
}; 