import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsInt()
  @Min(0)
  capacity: number;

  @IsInt()
  @Min(0)
  diameter: number;

  @IsInt()
  @Min(0)
  height: number;

  @IsNotEmpty()
  @IsString()
  description_first_paragraph: string;

  @IsNotEmpty()
  @IsString()
  description_second_paragraph: string;

  @IsNotEmpty()
  @IsString()
  description_subtitle: string;

  @IsNotEmpty()
  @IsString()
  description_title: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  gallery: string;

  @IsNotEmpty()
  @IsString()
  main_img: string;

  @IsInt()
  @Min(0)
  length: number;

  @IsInt()
  @Min(0)
  width: number;
}
