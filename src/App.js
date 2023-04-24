

function App() {
  return (
    <div className="App" >
 
 <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"red",color:'white'}}>
  <h1  href="home">Coding made Simple</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="home">Bootstrap </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="home">Theme</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="home">Blog</a>
      </li>
     
    </ul>
  </div>
</nav>



    </div>
  );
}

export default App;
