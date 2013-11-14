/*!
 * CanJS - 2.0.2
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Thu, 14 Nov 2013 17:39:50 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
define(["can/util/library", "can/map", "can/list", "can/compute"], function(can){
	can.Observe = can.Map;
	can.Observe.startBatch = can.batch.start;
	can.Observe.stopBatch = can.batch.stop;
	can.Observe.triggerBatch = can.batch.trigger;
	return can;
});