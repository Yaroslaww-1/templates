import { Entity } from '@core/common/entity/entity';
import { EditableEntity } from '@core/common/entity/editable-entity';
import { IsString } from 'class-validator';
import { CreatePingDto } from './type/create-ping.dto';
import { EditPingDto } from './type/edit-ping.dto';
import { Throwable } from '@core/common/errors/throwable';
import { EntityValidationError } from '@core/common/errors/entity-validation.error';

// prettier-ignore
export class Ping extends Entity implements EditableEntity<EditPingDto, Ping> {
  @IsString()
  private Ping: string;
  get ping(): string { return this.Ping; }

  constructor(payload: CreatePingDto) {
    super();
    this.Ping = payload.ping;
  }

  public async edit(payload: EditPingDto): Promise<Ping | Throwable<EntityValidationError>> {
    this.Ping = payload.ping;

    await super.validate();

    return this;
  }
}
