import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private noteRepo: Repository<Note>){}

  create(createNoteDto: CreateNoteDto) {
    const note = new Note()
    note.note = createNoteDto.note
    console.log('note ', note)
    return this.noteRepo.create(createNoteDto);
  }

  findAll() {
    return this.noteRepo.find();
  }

  findOne(id: number) {
    return this.noteRepo.findOne(id);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    await this.noteRepo.update(id,updateNoteDto);
  }

  async remove(id: number) {
    await this.noteRepo.delete(id);
  }
}
