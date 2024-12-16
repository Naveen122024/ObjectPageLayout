sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var BlockBachelorBsc = BlockBase.extend("sap.uxap.sample.SharedBlocks.bioData.BlockBachelorBsc", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "sap.uxap.sample.SharedBlocks.bioData.BlockBachelorBsc",
						type: "XML"
					},
					Expanded: {
						viewName: "sap.uxap.sample.SharedBlocks.bioData.BlockBachelorBsc",
						type: "XML"
					}
				}
			}
		});


		return BlockBachelorBsc;

	});