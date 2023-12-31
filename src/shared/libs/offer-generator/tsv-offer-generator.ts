import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { HouseType, MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItems, getRandomItem } from '../../helpers/index.js';
import { FIRST_WEEK_DAY, LAST_WEEK_DAY } from './offer-generator.constant.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(
      private readonly mockData: MockServerData
  ) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.description);
    const date = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem<string>(this.mockData.city);
    const preview = getRandomItem<string>(this.mockData.preview);
    const photos = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = getRandomItem<string>(this.mockData.isPremium);
    const houseType = getRandomItem<string>([
      HouseType.Room, HouseType.Hotel, HouseType.Apartment, HouseType.House
    ]);
    const rooms = getRandomItem<string>(this.mockData.rooms);
    const guests = getRandomItem<string>(this.mockData.guests);
    const price = getRandomItem<string>(this.mockData.price);
    const comforts = getRandomItems<string>(this.mockData.comforts).join(';');
    const name = getRandomItem<string>(this.mockData.name);
    const email = getRandomItem<string>(this.mockData.email);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPath);
    const role = getRandomItem<string>(this.mockData.role);
    const latitude = getRandomItem<string>(this.mockData.latitude);
    const longitude = getRandomItem<string>(this.mockData.longitude);

    return [
      title, description, date, city, preview, photos, isPremium,
      houseType, rooms, guests, price,
      comforts, name, email, avatarPath, role, latitude, longitude
    ].join('\t');
  }
}
