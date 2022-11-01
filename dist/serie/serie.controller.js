"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieController = void 0;
const common_1 = require("@nestjs/common");
const serie_service_1 = require("./serie.service");
const create_serie_dto_1 = require("./dto/create-serie.dto");
const update_serie_dto_1 = require("./dto/update-serie.dto");
const swagger_1 = require("@nestjs/swagger");
const pipes_1 = require("@nestjs/common/pipes");
let SerieController = class SerieController {
    constructor(serieService) {
        this.serieService = serieService;
    }
    create(createSerieDto) {
        return this.serieService.create(createSerieDto);
    }
    findAll() {
        return this.serieService.findAll();
    }
    findOne(id) {
        return this.serieService.findOne(+id);
    }
    update(id, updateSerieDto) {
        return this.serieService.update(+id, updateSerieDto);
    }
    remove(id) {
        return this.serieService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_serie_dto_1.CreateSerieDto]),
    __metadata("design:returntype", void 0)
], SerieController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SerieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SerieController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_serie_dto_1.UpdateSerieDto]),
    __metadata("design:returntype", void 0)
], SerieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SerieController.prototype, "remove", null);
SerieController = __decorate([
    (0, swagger_1.ApiTags)('Serie'),
    (0, common_1.Controller)('serie'),
    __metadata("design:paramtypes", [serie_service_1.SerieService])
], SerieController);
exports.SerieController = SerieController;
//# sourceMappingURL=serie.controller.js.map