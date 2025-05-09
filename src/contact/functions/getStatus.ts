/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { assertWid } from '../../assert';
import { StatusStore, Wid } from '../../whatsapp';
import { queryExists } from './queryExists';

/**
 * Get the current text status
 *
 * @example
 * ```javascript
 * await WPP.contact.getStatus('[number]@c.us');
 * ```
 *
 * @category Contact
 */

export async function getStatus(contactId: string | Wid) {
  const wid = assertWid(contactId);

  const exists = await queryExists(wid);

  if (!exists) {
    return null;
  }

  const model = await StatusStore.find(wid);

  return model.status || null;
}
