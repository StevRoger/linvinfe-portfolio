export const partnerAttributesMapping = {
  active: 'Active',
  id: 'ID',
  name: 'Name',
  profile: 'Profile',
  link: 'Link',
  messenger: 'Messenger',
  whatsapp: 'WhatsApp',
  telegram: 'Telegram',
  rating: 'Rating',
  skill1: 'Skill 1',
  skill2: 'Skill 2',
  skill3: 'Skill 3',
};


export interface Partner {
  active: boolean;
  id: number;
  name: string;
  profile: string;
  link: string;
  messenger: string;
  whatsapp: string;
  telegram: string;
  rating: number;
  skill1: string;
  skill2: string;
  skill3: string;
}
