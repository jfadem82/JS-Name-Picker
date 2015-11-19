var wdi_20_names = ["Alex", "Brandon", "Courtney", "Jessica", "Josh", "Kristin", "Miwa", "Shon", "TJ"];
function eachName() {
var x = Math.floor((Math.random() * wdi_20_names.length));
console.log(wdi_20_names[x]);
wdi_20_names.splice(x, 1);
if (wdi_20_names.length === 0){
	wdi_20_names.push("Alex", "Brandon", "Courtney", "Jessica", "Josh", "Kristin", "Miwa", "Shon", "TJ");
	}
}

