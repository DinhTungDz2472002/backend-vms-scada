import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('permissions').del();

  // Inserts seed entries
  await knex('permissions').insert([
    { id: 1, key: 'manage_camera', description: 'Quản lý camera', groupKey: 1 },
    { id: 2, key: 'livestream', description: 'Livestream', groupKey: 2 },
    // { id: 3, key: 'playback', description: 'Xem lại video', groupKey: 2 },
    { id: 4, key: 'emap', description: 'E-Map', groupKey: 2 },
    { id: 5, key: 'area', description: 'Quản lý khu vực', groupKey: 2 },
    { id: 6, key: 'user', description: 'Account', groupKey: 5 },
    { id: 7, key: 'role', description: 'Role', groupKey: 5 },
    { id: 8, key: 'event', description: 'Quản lý Events', groupKey: 6 },
    { id: 9, key: 'ai', description: 'Tính năng AI', groupKey: 7 },
    { id: 10, key: 'setting_network', description: 'Cài đặt Mạng' },
    { id: 11, key: 'setting_storage', description: 'Cài đặt Lưu trữ' },
    { id: 12, key: 'setting_email', description: 'Cài đặt Email' },
    { id: 13, key: 'audit_logs', description: 'Audit log', groupKey: 9 },
    { id: 14, key: 'setting_common', description: 'Cài đặt', groupKey: 8 },
    // { id: 15, key: 'setting_scada', description: 'Cài đặt Scada' , groupKey: 8},
    // Tính năng này kết nối vs DB của 1 scada 

    { id: 16, key: 'manage_scada', description: 'Quản lý Scada' , groupKey: 1},
  ]);

  // Update Id
  await knex.raw(
    "select setval('permissions_id_seq', max(id)) from permissions",
  );
}
