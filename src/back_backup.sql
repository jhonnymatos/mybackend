PGDMP  2                    |            back    16.3    16.3 5    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    33464    back    DATABASE     {   CREATE DATABASE back WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE back;
                postgres    false            �            1259    33519    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    reason text NOT NULL,
    status text NOT NULL,
    psych_id integer,
    user_id integer
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            �            1259    33518    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    226            &           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    225            �            1259    33490    evaluations    TABLE     �   CREATE TABLE public.evaluations (
    id integer NOT NULL,
    rating integer NOT NULL,
    comment text NOT NULL,
    date date NOT NULL,
    psych_id integer,
    user_id integer
);
    DROP TABLE public.evaluations;
       public         heap    postgres    false            �            1259    33489    evaluations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.evaluations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.evaluations_id_seq;
       public          postgres    false    220            '           0    0    evaluations_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.evaluations_id_seq OWNED BY public.evaluations.id;
          public          postgres    false    219            �            1259    33510    forms    TABLE     �  CREATE TABLE public.forms (
    id integer NOT NULL,
    "fullName" character varying NOT NULL,
    email character varying NOT NULL,
    state character varying NOT NULL,
    crp character varying NOT NULL,
    specialty character varying NOT NULL,
    specialty2 text,
    formation character varying NOT NULL,
    "formationArea" character varying NOT NULL,
    service character varying NOT NULL,
    service2 text,
    "shortBio" character varying NOT NULL,
    "fullBio" character varying NOT NULL
);
    DROP TABLE public.forms;
       public         heap    postgres    false            �            1259    33509    forms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.forms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.forms_id_seq;
       public          postgres    false    224            (           0    0    forms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.forms_id_seq OWNED BY public.forms.id;
          public          postgres    false    223            �            1259    33470 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            �            1259    33469    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          postgres    false    216            )           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          postgres    false    215            �            1259    33479    psychs    TABLE     �   CREATE TABLE public.psychs (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    phone text NOT NULL,
    crp text NOT NULL,
    state text NOT NULL
);
    DROP TABLE public.psychs;
       public         heap    postgres    false            �            1259    33478    psychs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.psychs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.psychs_id_seq;
       public          postgres    false    218            *           0    0    psychs_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.psychs_id_seq OWNED BY public.psychs.id;
          public          postgres    false    217            �            1259    33499    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    33498    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    222            +           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    221            n           2604    33583    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            k           2604    33584    evaluations id    DEFAULT     p   ALTER TABLE ONLY public.evaluations ALTER COLUMN id SET DEFAULT nextval('public.evaluations_id_seq'::regclass);
 =   ALTER TABLE public.evaluations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            m           2604    33585    forms id    DEFAULT     d   ALTER TABLE ONLY public.forms ALTER COLUMN id SET DEFAULT nextval('public.forms_id_seq'::regclass);
 7   ALTER TABLE public.forms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            i           2604    33586    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            j           2604    33587 	   psychs id    DEFAULT     f   ALTER TABLE ONLY public.psychs ALTER COLUMN id SET DEFAULT nextval('public.psychs_id_seq'::regclass);
 8   ALTER TABLE public.psychs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            l           2604    33588    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222                      0    33519    appointment 
   TABLE DATA           `   COPY public.appointment (id, name, email, phone, reason, status, psych_id, user_id) FROM stdin;
    public          postgres    false    226    >                 0    33490    evaluations 
   TABLE DATA           S   COPY public.evaluations (id, rating, comment, date, psych_id, user_id) FROM stdin;
    public          postgres    false    220   �>                 0    33510    forms 
   TABLE DATA           �   COPY public.forms (id, "fullName", email, state, crp, specialty, specialty2, formation, "formationArea", service, service2, "shortBio", "fullBio") FROM stdin;
    public          postgres    false    224   �>                 0    33470 
   migrations 
   TABLE DATA           ;   COPY public.migrations (id, "timestamp", name) FROM stdin;
    public          postgres    false    216   �>                 0    33479    psychs 
   TABLE DATA           N   COPY public.psychs (id, name, email, password, phone, crp, state) FROM stdin;
    public          postgres    false    218   ;?                 0    33499    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public          postgres    false    222   A       ,           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 2, true);
          public          postgres    false    225            -           0    0    evaluations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.evaluations_id_seq', 1, true);
          public          postgres    false    219            .           0    0    forms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.forms_id_seq', 1, false);
          public          postgres    false    223            /           0    0    migrations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);
          public          postgres    false    215            0           0    0    psychs_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.psychs_id_seq', 6, true);
          public          postgres    false    217            1           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    221            r           2606    33486 %   psychs PK_75644fa26f195dbc4b1ba7e5353 
   CONSTRAINT     e   ALTER TABLE ONLY public.psychs
    ADD CONSTRAINT "PK_75644fa26f195dbc4b1ba7e5353" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.psychs DROP CONSTRAINT "PK_75644fa26f195dbc4b1ba7e5353";
       public            postgres    false    218            p           2606    33477 )   migrations PK_8c82d7f526340ab734260ea46be 
   CONSTRAINT     i   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.migrations DROP CONSTRAINT "PK_8c82d7f526340ab734260ea46be";
       public            postgres    false    216            x           2606    33506 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public            postgres    false    222            |           2606    33517 $   forms PK_ba062fd30b06814a60756f233da 
   CONSTRAINT     d   ALTER TABLE ONLY public.forms
    ADD CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.forms DROP CONSTRAINT "PK_ba062fd30b06814a60756f233da";
       public            postgres    false    224            ~           2606    33526 *   appointment PK_e8be1a53027415e709ce8a2db74 
   CONSTRAINT     j   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.appointment DROP CONSTRAINT "PK_e8be1a53027415e709ce8a2db74";
       public            postgres    false    226            v           2606    33497 *   evaluations PK_f683b433eba0e6dae7e19b29e29 
   CONSTRAINT     j   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT "PK_f683b433eba0e6dae7e19b29e29" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT "PK_f683b433eba0e6dae7e19b29e29";
       public            postgres    false    220            z           2606    33508 $   users UQ_97672ac88f789774dd47f7c8be3 
   CONSTRAINT     b   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3";
       public            postgres    false    222            �           2606    33528 *   appointment UQ_af5eb427522ef1580f30f209170 
   CONSTRAINT     h   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "UQ_af5eb427522ef1580f30f209170" UNIQUE (email);
 V   ALTER TABLE ONLY public.appointment DROP CONSTRAINT "UQ_af5eb427522ef1580f30f209170";
       public            postgres    false    226            t           2606    33488 %   psychs UQ_e0682fa4bf0b4ce09a3fbeb90c7 
   CONSTRAINT     c   ALTER TABLE ONLY public.psychs
    ADD CONSTRAINT "UQ_e0682fa4bf0b4ce09a3fbeb90c7" UNIQUE (email);
 Q   ALTER TABLE ONLY public.psychs DROP CONSTRAINT "UQ_e0682fa4bf0b4ce09a3fbeb90c7";
       public            postgres    false    218            �           2606    33539 *   appointment FK_15d50a87502380623ff0c27e458    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "FK_15d50a87502380623ff0c27e458" FOREIGN KEY (user_id) REFERENCES public.users(id);
 V   ALTER TABLE ONLY public.appointment DROP CONSTRAINT "FK_15d50a87502380623ff0c27e458";
       public          postgres    false    222    4728    226            �           2606    33544 *   evaluations FK_3d371b1ebe55ca4c60cbf66fa0e    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e" FOREIGN KEY (user_id) REFERENCES public.users(id);
 V   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e";
       public          postgres    false    220    222    4728            �           2606    33529 *   evaluations FK_a1fb6ff666edaee209315c6b4ec    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec" FOREIGN KEY (psych_id) REFERENCES public.psychs(id);
 V   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec";
       public          postgres    false    4722    218    220            �           2606    33534 *   appointment FK_d2f9ce05aea074a7a68d1480abd    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT "FK_d2f9ce05aea074a7a68d1480abd" FOREIGN KEY (psych_id) REFERENCES public.psychs(id);
 V   ALTER TABLE ONLY public.appointment DROP CONSTRAINT "FK_d2f9ce05aea074a7a68d1480abd";
       public          postgres    false    4722    218    226               �   x���1
�0����9A �V��I���H�`B�[z��Ŭ�(�}����Y^O�]�g�$,�~򈅇��xȺM�mw�]
|��4�)�^��F ιȌ@��rt�X�}ݾ�Km�jA���#��F)��m;5         4   x�3�4�<<�$37_!�$5/%375�$_�����D��L�ȘӐӐ+F��� 4�}            x������ � �         6   x�3�447�447761414�tIMK,�)A�2�(�4312
�(�	r��qqq ��f         �  x�m�˒�@�u��pP*���E| ��1�J,^� ϯomf"�p6���DfB�����_Q�i�,#�4�����U&IZ$�
�'������hi��O̹;��IV��&�PE�� E��hu
l\�sXU�����}�l��$J��Mf-�|S!������}�#�ws���u��S��L�_88p8�}��c�sB��`C�����-�3�q.��o�Y{���4��Zo�%b��0����w�e��ՕW�P�)�H�;+b�wx7w<[�gj��ymS�׼o��D�^A�=i��{֕���{�B�bʃ)�9�NU�8�ǝA��wP���G��d�U��TM�na,j�w��]҃���þ��P@���10J|")t�wsm�ob
+ϫ/��⌏�S����e{�;NG��k�㲣�
�b��D?&���8��N��         n  x�m�;��@��>E
�AĥK�EFw�`$�p���~����i�O���Wi��#��3/I�@Z��&y���su��L�����]�(�(�%l�й]��)�M~�:l�u��PT��3���Qο������[f1ãry_rk;�3��b�;Q�d*#��co��/��y%����9`h�Yj؀7v�g�������ĉ�ٸ���q#Q-��W����y���g'���=�*�rtD^���1������t�J@���Wp0� ~H��O�~�6����9Y��r�r����!�7}���P�֤�q.Ҿn6��?`��#ǗV���[��A��M��6�1�ks���)�+�����	'֣h     