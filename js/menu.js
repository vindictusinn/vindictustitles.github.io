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
'            <a class="navbar-brand" href="#"> VindictusInn</a>'+
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
'                                <li><a href="#">Albey Ruins</a></li>'+
'                                <li><a href="#">Ainle</a></li>'+
'                                <li><a href="#">Heide</a></li>'+
'                                <li><a href="#">Hilder Forest Ruins</a></li>'+
'                                <li><a href="#">Hoarfrost Depths</a></li>'+
'                                <li><a href="#">Hoarfrost Hollow</a></li>'+
'                                <li><a href="#">Niflheim</a></li>'+
'                                <li><a href="#">Perilous Ruins</a></li>'+
'                                <li><a href="#">Prairie Entrance</a></li>'+
'                                <li><a href="#">Ruins of Sanctity</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Rocheste</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Catacombs</a></li>'+
'                                <li><a href="#">Fomorian Base</a></li>'+
'                                <li><a href="#">Ortel Castle</a></li>'+
'                                <li><a href="#">Rocheste Castle Tower</a></li>'+
'                                <li><a href="#">Sewers</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Malina</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Ship Graveyard</a></li>'+
'                                <li><a href="#">Twilight Desert</a></li>'+
'                                <li><a href="#">Misty Summit</a></li>'+
'                                <li><a href="#">Annwyn</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ben Chenner</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Ben Chenner Entrance</a></li>'+
'                                <li><a href="#">Ben Chenner Trailhead</a></li>'+
'                                <li><a href="#">Ben Chenner Slopes</a></li>'+
'                                <li><a href="#">Ben Chenner Summit</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Lochlann</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Lochlann Plains</a></li>'+
'                            </ul>'+
'                        </li>'+
'						<li class="divider"></li>'+
'						<li class="dropdown-submenu">'+
'                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>'+
'                            <ul class="dropdown-menu">'+
'                                <li><a href="#">Fishing Boat</a></li>'+
'                                <li><a href="#">Resenlian\'s Labyrinth</a></li>'+
'                                <li><a href="#">Unknown Area</a></li>'+
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
'				<li><a href="#">PvP</a></li>'+
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