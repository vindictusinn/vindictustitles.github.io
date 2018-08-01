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
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Berbhe</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/ben_chenner_entrance">Ben Chenner Entrance</a></li>'+
'                                <li><a href="/ben_chenner_trailhead">Ben Chenner Trailhead</a></li>'+
'                                <li><a href="/ben_chenner_slopes">Ben Chenner Slopes</a></li>'+
'                                <li><a href="/ben_chenner_summit">Ben Chenner Summit</a></li>'+
'                                <li><a href="/lochlann_plains">Lochlann Plains</a></li>'+
'                                <li><a href="/downtown_berbhe">Downtown Berbhe</a></li>'+
'                                <li><a href="/donegal">Donegal</a></li>'+
'                                <li><a href="/jardin">Jardin</a></li>'+
'                                <li><a href="/aidan">Aidan</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="divider"></li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/index">Alban Festival</a></li>'+
'                                <li><a href="/fishing_boat">Fishing Boat</a></li>'+
'                                <li><a href="/ein_lacher">Ein Lacher</a></li>'+
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
'                                <li><a href="/fiona">Fiona</a></li>'+
'                                <li><a href="/evie">Evie</a></li>'+
'                                <li><a href="/vella">Vella</a></li>'+
'                                <li><a href="/lynn">Lynn</a></li>'+
'                                <li><a href="/arisha">Arisha</a></li>'+
'                                <li><a href="/delia">Delia</a></li>'+
'                                <li><a href="/miri">Miri</a></li>'+
'                            </ul>'+
'						</li>'+
'						<li class="dropdown-submenu">'+
'							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Male</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="/lann">Lann</a></li>'+
'                                <li><a href="/karok">Karok</a></li>'+
'                                <li><a href="/kai">Kai</a></li>'+
'                                <li><a href="/hurk">Hurk</a></li>'+
'                                <li><a href="/sylas">Sylas</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="divider"></li>'+
'						<li><a href="/counter">Count Breakdown</a></li>'+
'						<li><a href="/titlecolors">Title Color List</a></li>'+
'                    </ul>'+
'                </li>'+
'				<li><a href="/quests">Quests</a></li>'+
'				<li><a href="/sets">Sets</a></li>'+
'				<li><a href="/pvp">PvP</a></li>'+
'				<li><a href="/misc">Misc</a></li>'+
'				<li>'+
'                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>'+
'                    <ul class="dropdown-menu">'+
'                        <li><a href="/exclusive">Exclusive</a></li>'+
'                        <li><a href="/removed">Removed</a></li>'+
'                        <li><a href="/unreleased">Unreleased</a></li>'+
'                        <li><a href="/event">Event</a></li>'+
'                    </ul>'+
'                </li>'+
'				<li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DNU8M7RC83K54">Donate</a></li>'+
'            </ul>'+
'        </div><!--/.nav-collapse -->'+
'    </div>'//+
//'<div id="announcement">Find the site useful? Consider <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DNU8M7RC83K54">donating</a> to keep it running. This site will no longer be possible once Sanitee\'s wallet is empty. :c</div>'
)}