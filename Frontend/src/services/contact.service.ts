import api from './api';
import { ContactMessageDTO, ContactResponse } from '../types/contact.types';

export const contactService = {
  submit: async (messageData: ContactMessageDTO): Promise<ContactResponse> => {
    return api.post<ContactResponse>('/contact', messageData);
  }
};
