import { IsNotEmpty, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  user_email: string;

  @IsNotEmpty()
  @IsString()
  user_address: string;

  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  delivery: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price_products: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price_total: number;
}
