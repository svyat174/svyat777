import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RewiewModel } from './rewiew.model';

@Controller('rewiew')
export class RewiewController {
	@Post('create')
	async create(@Body() dto: Omit<RewiewModel, '_id'>){}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
