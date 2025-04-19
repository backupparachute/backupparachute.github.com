var thisScript = document.currentScript;
var campaign = thisScript.getAttribute("data-campaign");

// setInterval(() => console.log(thisScript.src), 2000);

const nav_html = `<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://backupparachute.com?utm_source=backupparachute&utm_medium=logo&utm_campaign=${campaign}"><img src="https://backupparachute.com/images/bps-logo-green.png" class="" height="40px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
				<a class="navbar-brand" href="https://backupparachute.com?utm_source=backupparachute&utm_medium=tools_logo&utm_campaign=${campaign}&utm_content=logolink"><img src="https://backupparachute.com/images/bps-logo-green.png" class="" height="60px"></a>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://backupparachute.com?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/contact?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/calculators?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">All Calculators</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/dev-release-calculator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Dev Release Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/basic-auth-generator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Basic Auth Generator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/basic-auth-generator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Base64 Decoder</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/cashflow-calculator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Cashflow Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/sdr-calculator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">SDR Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/startup-metrics?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Startup Metrics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/tranche-calculator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Tranche Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/goal-tracker?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Goal Tracker</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="https://backupparachute.com/duration-calculator?utm_source=backupparachute&utm_medium=tools_nav&utm_campaign=${campaign}&utm_content=listtextlink">Duration Calculator</a>
          </li>
        </ul>
        <!--
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        -->
        <div class="">
        	<a href="https://backupparachute.com/calculators?utm_source=backupparachute&utm_medium=ad-link&utm_campaign=${campaign}&utm_content=adtextlink">Get a custom app for your website today!</a>
        			<div class="">
        			<small><mark>Flat rate pricing, and a 100% money back guarantee!</mark></small>
        			</div>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", function(){
  build_nav();
});

function build_nav() {

  document.body.insertAdjacentHTML("afterbegin", nav_html);

}
