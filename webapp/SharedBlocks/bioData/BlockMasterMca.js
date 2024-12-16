sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var BlockMasterMca = BlockBase.extend("sap.uxap.sample.SharedBlocks.bioData.BlockMasterMca", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "sap.uxap.sample.SharedBlocks.bioData.BlockMasterMca",
						type: "XML"
					},
					Expanded: {
						viewName: "sap.uxap.sample.SharedBlocks.bioData.BlockMasterMca",
						type: "XML"
					}
				}
			}
		});


		return BlockMasterMca;

	});