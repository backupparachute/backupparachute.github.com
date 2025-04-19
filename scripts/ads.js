var thisScript = document.currentScript;
var target = thisScript.getAttribute("data-target");
var campaign = thisScript.getAttribute("data-campaign");

// setInterval(() => console.log(thisScript.src), 2000);

const ad_html = `<div class="col text-end">
			<a href="https://backupparachute.com/calculators?utm_source=backupparachute&utm_medium=ad-link&utm_campaign=${campaign}&utm_content=adtextlink">Get a custom calculator like this for your website today!</a>
			<div class="">
			<small><mark>Flat rate pricing, and a 100% money back guarantee!</mark></small>
			</div>
		</div>
`;

document.addEventListener("DOMContentLoaded", function(){
  build_ads();
});

function build_ads() {
  var elem = null;

  if (target) {
    elem = document.getElementById(target);
  } else {
    elem = document.getElementById("footer");
  }

  elem.insertAdjacentHTML("beforeend", ad_html);

}
