/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"firefighter_new_personel/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
