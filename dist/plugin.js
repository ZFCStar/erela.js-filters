"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFilter = void 0;
const erela_js_1 = require("erela.js");
class customFilter extends erela_js_1.Plugin {
    load() {
        erela_js_1.Structure.extend("Player", (Player) => class extends Player {
            constructor() {
                super(...arguments);
                this.filter = {}
                //Private Filter Boolean
                this.filter._nightcore = false;
                this.filter._vaporwave = false;
                this.filter._bassboost = false;
                this.filter._pop = false;
                this.filter._soft = false;
                this.filter._treblebass = false;
                this.filter._eightD = false;
                this.filter._karaoke = false;
                this.filter._vibrato = false;
                this.filter._tremolo = false;
                //Private Filter Data
                this.filter._resetData = {
                    op: "filters",
                    guildId: this.guild,
                };
                this.filter._nightcoreData = {
                    op: "filters",
                    guildId: this.guild,
                    timescale: {
                        speed: 1.2999999523162842,
                        pitch: 1.2999999523162842,
                        rate: 1,
                    },
                };
                this.filter._vaporwaveData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 1, gain: 0.3 },
                        { band: 0, gain: 0.3 },
                    ],
                    timescale: { pitch: 0.5 },
                    tremolo: { depth: 0.3, frequency: 14 },
                };
                this.filter._bassboostData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 },
                    ],
                };
                this.filter._popData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.65 },
                        { band: 1, gain: 0.45 },
                        { band: 2, gain: -0.45 },
                        { band: 3, gain: -0.65 },
                        { band: 4, gain: -0.35 },
                        { band: 5, gain: 0.45 },
                        { band: 6, gain: 0.55 },
                        { band: 7, gain: 0.6 },
                        { band: 8, gain: 0.6 },
                        { band: 9, gain: 0.6 },
                        { band: 10, gain: 0 },
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                    ],
                };
                this.filter._softData = {
                    op: "filters",
                    guildId: this.guild,
                    lowPass: {
                        smoothing: 20.0
                    }
                };
                this.filter._treblebassData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 },
                    ],
                };
                this.filter._eightDData = {
                    op: "filters",
                    guildId: this.guild,
                    rotation: {
                        rotationHz: 0.2
                    }
                };
                this.filter._karaokeData = {
                    op: "filters",
                    guildId: this.guild,
                    karaoke: {
                        level: 1.0,
                        monoLevel: 1.0,
                        filterBand: 220.0,
                        filterWidth: 100.0
                    },
                };
                this.filter._vibratoData = {
                    op: "filters",
                    guildId: this.guild,
                    vibrato: {
                        frequency: 10,
                        depth: 0.9
                    }
                };
                this.filter._tremoloData = {
                    op: "filters",
                    guildId: this.guild,
                    tremolo: {
                        frequency: 10,
                        depth: 0.5
                    }
                };
            }
            //Setting the filter
            set nightcore(status) {
                this.filter._nightcore = status;
                if (status) {
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._soft = false;
                    this.filter._pop = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._nightcoreData);
                }
                else
                    this.filter._resetnode();
            }
            set vaporwave(status) {
                this.filter._vaporwave = status;
                if (status) {
                    this.filter._bassboost = false;
                    this.filter._nightcore = false;
                    this.filter._soft = false;
                    this.filter._pop = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._vaporwaveData);
                }
                else
                    this.filter._resetnode();
            }
            set bassboost(status) {
                this.filter._bassboost = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._soft = false;
                    this.filter._pop = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._bassboostData);
                }
                else
                    this.filter._resetnode();
            }
            set pop(status) {
                this.filter._pop = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._soft = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._popData);
                }
                else
                    this.filter._resetnode();
            }
            set soft(status) {
                this.filter._soft = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._softData);
                }
                else
                    this.filter._resetnode();
            }
            set treblebass(status) {
                this.filter._treblebass = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._soft = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._treblebassData);
                }
                else
                    this.filter._resetnode();
            }
            set eightD(status) {
                this.filter._eightD = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._soft = false;
                    this.filter._treblebass = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._eightDData);
                }
                else
                    this.filter._resetnode();
            }
            set karaoke(status) {
                this.filter._karaoke = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._soft = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._vibrato = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._karaokeData);
                }
                else
                    this.filter._resetnode();
            }
            set vibrato(status) {
                this.filter._vibrato = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._soft = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._tremolo = false;
                    this.filter.node.send(this.filter._vibratoData);
                }
                else
                    this.filter._resetnode();
            }
            set tremolo(status) {
                this.filter._tremolo = status;
                if (status) {
                    this.filter._nightcore = false;
                    this.filter._vaporwave = false;
                    this.filter._bassboost = false;
                    this.filter._pop = false;
                    this.filter._soft = false;
                    this.filter._treblebass = false;
                    this.filter._eightD = false;
                    this.filter._karaoke = false;
                    this.filter._vibrato = false;
                    this.filter.node.send(this.filter._tremoloData);
                }
                else
                    this.filter._resetnode();
            }
            //Get Filter Status
            get nightcore() {
                return this.filter._nightcore;
            }
            get vaporwave() {
                return this.filter._vaporwave;
            }
            get bassboost() {
                return this.filter._bassboost;
            }
            get pop() {
                return this.filter._pop;
            }
            get soft() {
                return this.filter._soft;
            }
            get treblebass() {
                return this.filter._treblebass;
            }
            get eightD() {
                return this.filter._eightD;
            }
            get karaoke() {
                return this.filter._karaoke;
            }
            get vibrato() {
                return this.filter._vibrato;
            }
            get tremolo() {
                return this.filter._tremolo;
            }
            //Reset Everything
            _resetnode() {
                this.node.send(this.filter._resetData);
            }
            reset() {
                this.filter._resetnode();
                this.filter._nightcore = false;
                this.filter._vaporwave = false;
                this.filter._bassboost = false;
                this.filter._soft = false;
                this.filter._pop = false;
                this.filter._treblebass = false;
                this.filter._eightD = false;
                this.filter._karaoke = false;
                this.filter._vibrato = false;
                this.filter._tremolo = false;
            }
        });
    }
}
exports.customFilter = customFilter;
