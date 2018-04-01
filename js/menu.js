InsertMenu = function(){
	$('#menu').html('<div class="container">'+
'        <div class="navbar-header">'+
'            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
'                <span class="sr-only">Toggle navigation</span>'+
'                <span class="icon-bar"></span>'+
'                <span class="icon-bar"></span>'+
'                <span class="icon-bar"></span>'+
'            </button>'+
'			<img src="img/icon.png" class="img-fluid icon">'+
'            <a class="navbar-brand" href="/"> VindictusInn</a>'+
'        </div>'+
'        <div class="collapse navbar-collapse">'+
'            <ul class="nav navbar-nav navbar-right">'+
'                <li><a href="https://discord.gg/sfvwuX9" target="_blank">Discord Server</a></li>'+
'            </ul>'+
'            <ul class="nav navbar-nav">'+
'                <li class="active"><a href="/">Home</a></li>'+
'                <li>'+
'                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Battles</a>'+
'                    <ul class="dropdown-menu multi-level">'+
'                        <li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Colhen</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/albey_ruins">Albey Ruins</a></li>'+
'                                <li><a href="/ainle">Ainle</a></li>'+
'                                <li><a href="/heide">Heide</a></li>'+
'                                <li><a href="/hilder_forest_ruins">Hilder Forest Ruins</a></li>'+
'                                <li><a href="#">Hoarfrost Depths</a></li>'+
'                                <li><a href="/hoarfrost_hollow">Hoarfrost Hollow</a></li>'+
'                                <li><a href="/niflheim">Niflheim</a></li>'+
'                                <li><a href="/perilous_ruins">Perilous Ruins</a></li>'+
'                                <li><a href="/prairie_entrance">Prairie Entrance</a></li>'+
'                                <li><a href="/ruins_of_sanctity">Ruins of Sanctity</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Rocheste</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/catacombs">Catacombs</a></li>'+
'                                <li><a href="/fomorian_base">Fomorian Base</a></li>'+
'                                <li><a href="/ortel_castle">Ortel Castle</a></li>'+
'                                <li><a href="/rocheste_castle_tower">Rocheste Castle Tower</a></li>'+
'                                <li><a href="/sewers">Sewers</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Malina</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/ship_graveyard">Ship Graveyard</a></li>'+
'                                <li><a href="/twilight_desert">Twilight Desert</a></li>'+
'                                <li><a href="/misty_summit">Misty Summit</a></li>'+
'                                <li><a href="/annwyn">Annwyn</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ben Chenner</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/ben_chenner_entrance">Ben Chenner Entrance</a></li>'+
'                                <li><a href="/ben_chenner_trailhead">Ben Chenner Trailhead</a></li>'+
'                                <li><a href="/ben_chenner_slopes">Ben Chenner Slopes</a></li>'+
'                                <li><a href="/ben_chenner_summit">Ben Chenner Summit</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Lochlann</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/lochlann_plains">Lochlann Plains</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="divider"></li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/fishing_boat">Fishing Boat</a></li>'+
'                                <li><a href="/resenlians_labyrinth">Resenlian\'s Labyrinth</a></li>'+
'                                <li><a href="/unknown_area">Unknown Area</a></li>'+
'                            </ul>'+
'                        </li>'+
'                    </ul>'+
'                </li>'+
'                <li>'+
'                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Character</a>'+
'                    <ul class="dropdown-menu">'+
'                        <li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Female</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Fiona</a></li>'+
'                                <li><a href="#">Evie</a></li>'+
'                                <li><a href="#">Vella</a></li>'+
'                                <li><a href="#">Lynn</a></li>'+
'                                <li><a href="#">Arisha</a></li>'+
'                                <li><a href="#">Delia</a></li>'+
'                                <li><a href="#">Miri</a></li>'+
'                            </ul>'+
'						</li>'+
'						<li class="dropdown-submenu">'+
'							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Male</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Lann</a></li>'+
'                                <li><a href="#">Karok</a></li>'+
'                                <li><a href="#">Kai</a></li>'+
'                                <li><a href="#">Hurk</a></li>'+
'                                <li><a href="#">Sylas</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="divider"></li>'+
'						<li><a href="#">Count Breakdown</a></li>'+
'                    </ul>'+
'                </li>'+
'				<li><a href="/quests">Quests</a></li>'+
'				<li><a href="/sets">Sets</a></li>'+
'				<li><a href="/pvp">PvP</a></li>'+
'				<li><a href="#">Misc</a></li>'+
'				<li>'+
'                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>'+
'                    <ul class="dropdown-menu">'+
'                        <li><a href="#">Exclusive</a></li>'+
'                        <li><a href="#">Removed</a></li>'+
'                        <li><a href="#">Unreleased</a></li>'+
'                        <li><a href="#">Event</a></li>'+
'                    </ul>'+
'                </li>'+
'            </ul>'+
'        </div><!--/.nav-collapse -->'+
'    </div>'+
'<div id="announcement">This site is currently a work in progress.</div>'
)}