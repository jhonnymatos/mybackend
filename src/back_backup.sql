PGDMP  
    
                |            back    16.3    16.3 5    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
          public          postgres    false    219            �            1259    33510    forms    TABLE     J  CREATE TABLE public.forms (
    id integer NOT NULL,
    specialty2 text,
    service2 text,
    "fullName" text NOT NULL,
    email text NOT NULL,
    state text NOT NULL,
    crp text NOT NULL,
    specialty text NOT NULL,
    formation text NOT NULL,
    "formationArea" text NOT NULL,
    service text NOT NULL,
    "shortBio" text NOT NULL,
    "fullBio" text NOT NULL,
    phone text NOT NULL,
    approach text NOT NULL,
    specialty3 text,
    "formationArea2" text,
    service3 text,
    gender text NOT NULL,
    "serviceModality" text NOT NULL,
    pounds text NOT NULL
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
    public          postgres    false    226   �>                 0    33490    evaluations 
   TABLE DATA           S   COPY public.evaluations (id, rating, comment, date, psych_id, user_id) FROM stdin;
    public          postgres    false    220   ??                 0    33510    forms 
   TABLE DATA           �   COPY public.forms (id, specialty2, service2, "fullName", email, state, crp, specialty, formation, "formationArea", service, "shortBio", "fullBio", phone, approach, specialty3, "formationArea2", service3, gender, "serviceModality", pounds) FROM stdin;
    public          postgres    false    224   �?                 0    33470 
   migrations 
   TABLE DATA           ;   COPY public.migrations (id, "timestamp", name) FROM stdin;
    public          postgres    false    216   �?                 0    33479    psychs 
   TABLE DATA           N   COPY public.psychs (id, name, email, password, phone, crp, state) FROM stdin;
    public          postgres    false    218   @                 0    33499    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public          postgres    false    222   B       ,           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 2, true);
          public          postgres    false    225            -           0    0    evaluations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.evaluations_id_seq', 4, true);
          public          postgres    false    219            .           0    0    forms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.forms_id_seq', 1, false);
          public          postgres    false    223            /           0    0    migrations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.migrations_id_seq', 4, true);
          public          postgres    false    215            0           0    0    psychs_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.psychs_id_seq', 7, true);
          public          postgres    false    217            1           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
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
|��4�)�^��F ιȌ@��rt�X�}ݾ�Km�jA���#��F)��m;5         ?   x�3�4�<<�$37_!�$5/%375�$_�����D��L�ȘӐӐˈ��2SN#N#�=... W            x������ � �         Q   x�]�1� ��}�a�Oz�aC����_#���d��tW�Qün�܏!5��Dn�RC�TbdJi��a-e�G���X Z#"         �  x�m��r�@�u�Y���Av#1*^ Tͦ��[+w|�h�TY�l��w_��G jIA�o��rD26�9���D�'�Wn."��Y��ҭ+J33�TO=q���M1�ά��I�iC�@T�K2�U��V��B%*#�u���䑯�����!�R�iʬǑo�X�UՍ������S���}I�V��~E��'�� lB�N�m�
LJ�H`K�ǜ���b-�SӶcC+vŬ�Zz���n��]��J���݄�5��nGW�+��4���H�w���x5�
�����t~ޘ���[�7}^$�M�w]��U'�K�<��hJ��e��	)�s�3���
.�G�t��#��vj^��}���Ѱ�o����*�!_\�'PA��/I��w�W(�d�Wsc��&Dh<������#"~;p��ma�a��R�W���'�&�1�P⌂|�WP��*v�*-i��88ʴ����q,�[rׇ�z��]O�%��� }�9����e��^�a         �  x�mл��@���b�B��4w�T�aMR@�h!�@	O?��Ց��;:_pD��nz<���.kT�55���\(�}#���h����ۛ���݆��Fp�E�;ƼA�_�-��*X���NF�z��t\pI�\�r��������	֔8�#1�#֎�8��9�:+i��w�N������P��p%�xp�|���9�$ς}r)�v�	�Y�!�"��(��lwe��g������-�J��z��c8�s^ &8i�R� ������-�t�>��[8);[j��?bc2c'E4����hC�R��*@)ffݠ�WTe}�1d��@t�w��}q{A��=o���e�dH3T���7�!���X�iq�5�}G?��hf��,e;
�2�a��M�VΑE����E�ZOC�[��X��K-��     